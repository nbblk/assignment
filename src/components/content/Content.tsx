import React, { ChangeEvent } from "react";
import Dropdown from "./filter/dropdown/Dropdown";
import Reset from "./filter/Reset";
import Subtitle from "../main/Subtitle";
import Title from "../main/Title";
import styled from "styled-components";
import ToggleSwitch from "./filter/ToggleSwitch";
import List from "./List";
import { CardProps } from "./card/Card";
import { CheckOption, Filter } from "../../container/Main";

const ContentStyle = styled.div`
  padding: 0 10%;
`;

const HeaderStyle = styled.div`
  padding: 50px 5%;
`;

const FilterStyle = styled.div`
  font-size: small;
  display: flex;
  justify-content: space-between;

  @media (max-width: 360px) {
    flex-direction: column;
  }
`;

const DropdownStyle = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: small;
  margin-bottom: 10px;
`;

type ContentProps = {
  methods: CheckOption[];
  materials: CheckOption[];
  items: CardProps[];
  isFiltered: boolean;
  onConsultOnly: boolean;
  isActive: { methods: boolean; materials: boolean };
  clickDropdown: (type: Filter) => void;
  check: (type: Filter, option: CheckOption) => void;
  resetFilters: () => void;
  toggle: (event: ChangeEvent<HTMLInputElement>) => void;
};

const Content = (props: ContentProps) => {
  return (
    <ContentStyle>
      <HeaderStyle>
        <Title value="들어온 요청" />
        <Subtitle value="파트너님에게 딱 맞는 요청서를 찾아보세요." />
        <FilterStyle>
          <DropdownStyle>
            <Dropdown
              type="가공방식"
              click={props.clickDropdown}
              check={props.check}
              isActive={props.isActive.methods}
              checked={props.methods}
              checkedCount={
                props.methods.filter((method) => method.checked).length
              }
            />
            <Dropdown
              type="재료"
              click={props.clickDropdown}
              check={props.check}
              isActive={props.isActive.materials}
              checked={props.materials}
              checkedCount={
                props.materials.filter((material) => material.checked).length
              }
            />
            {props.isFiltered ? (
              <Reset value="필터링 리셋" click={props.resetFilters} />
            ) : null}
          </DropdownStyle>
          <ToggleSwitch value="상담 중인 요청만 보기" toggle={props.toggle} />
        </FilterStyle>
      </HeaderStyle>
      <List
        items={props.items}
        onConsultOnly={props.onConsultOnly}
        isFiltered={props.isFiltered}
        methods={props.methods}
        materials={props.materials}
      />
    </ContentStyle>
  );
};

export default Content;
