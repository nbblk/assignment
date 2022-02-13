import React, { ChangeEvent } from "react";
import styled from "styled-components";
import Background from "../components/Background";
import Header from "../components/header/Header";
import Sidebar from "../components/sidebar/Sidebar";
import Content from "../components/content/Content";

export const Container = styled.div`
  width: 100%;
  height: 100%;
`;

export type Filter = "methods" | "materials";
export type CheckOption = {
  id?: number;
  type: string;
  checked: boolean;
};

interface MainState {
  dropdown: { methods: boolean; materials: boolean };
  methods: CheckOption[];
  materials: CheckOption[];
  isHamburgerClicked: boolean;
  isFiltered: boolean;
  isToggledOn: boolean;
  isBackdropOn: boolean;
  items: [];
}

class Main extends React.Component<{}, MainState> {
  constructor(props: MainState) {
    super(props);
    this.state = {
      dropdown: { methods: false, materials: false },
      methods: [
        { type: "밀링", checked: false },
        { type: "선반", checked: false },
      ],
      materials: [
        { type: "알루미늄", checked: false },
        { type: "탄소강", checked: false },
        { type: "구리", checked: false },
        { type: "합금강", checked: false },
        { type: "강철", checked: false },
      ],
      isHamburgerClicked: false,
      isFiltered: false,
      isToggledOn: false,
      isBackdropOn: false,
      items: [],
    };
  }

  async componentDidMount() {
    await this.fetchList();
  }

  async fetchList() {
    const response = await fetch(
      "https://my-json-server.typicode.com/nbblk/assignment/requests"
    );

    if (!response.ok) {
      const message = `An error has occured: ${response.status}`;
      throw new Error(message);
    }

    const items = await response.json();
    this.setState({ items: items });
  }

  checkHandler = (type: Filter, option: CheckOption) => {
    const arr = [...this.state[type]];
    arr[option.id!].checked = option.checked;
    this.setState({ ...this.state, [type]: arr });
    this.checkIsFiltered();
  };

  checkIsFiltered = () => {
    const materialFilterCount = this.state.materials.filter(
      (option) => option.checked
    ).length;
    const methodFilterCount = this.state.methods.filter(
      (option) => option.checked
    ).length;

    if (materialFilterCount || methodFilterCount) {
      this.setState({ isFiltered: true });
    }

    if (!materialFilterCount && !methodFilterCount) {
      this.setState({ isFiltered: false });
    }
  };

  resetFilters = () => {
    const newmaterials = [...this.state.materials].map(
      (material: CheckOption) => {
        material.checked = false;
        return material;
      }
    );
    const newmethods = [...this.state.methods].map((method: CheckOption) => {
      method.checked = false;
      return method;
    });

    this.setState({
      materials: newmaterials,
      methods: newmethods,
      isFiltered: false,
    });
  };

  render() {
    return (
      <Container>
        {this.state.isHamburgerClicked ? (
          <Sidebar isActive={this.state.isHamburgerClicked} />
        ) : null}
        {this.state.isHamburgerClicked ? (
          <Background
            click={() =>
              this.setState({
                isBackdropOn: false,
                isHamburgerClicked: false,
              })
            }
          />
        ) : null}
        <Header
          clickHamburger={() =>
            this.setState({
              isHamburgerClicked: !this.state.isHamburgerClicked,
            })
          }
        />
        <Content
          methods={this.state.methods}
          materials={this.state.materials}
          items={this.state.items}
          isFiltered={this.state.isFiltered}
          isActive={this.state.dropdown}
          onConsultOnly={this.state.isToggledOn}
          clickDropdown={(type: Filter) =>
            this.setState({
              dropdown: {
                ...this.state.dropdown,
                [type]: !this.state.dropdown[type],
              },
            })
          }
          check={(type: Filter, option: CheckOption) =>
            this.checkHandler(type, option)
          }
          toggle={(event: ChangeEvent<HTMLInputElement>) => {
            this.setState({ isToggledOn: event.target.checked });
          }}
          resetFilters={() => this.resetFilters()}
        />
      </Container>
    );
  }
}

export default Main;
