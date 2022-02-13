import styled from "styled-components";
import { CheckOption, Filter } from "../../container/Main";
import Card, { CardProps } from "./card/Card";

const NoListStyle = styled.div`
  width: 100%;
  height: 30vh;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #e5e5e5;
  border-radius: 4px;
`;
const ListStyle = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-item: center;
  justify-content: center;

  div {
    margin: 10px;
  }
`;

type ListProps = {
  items: CardProps[];
  onConsultOnly: boolean;
  isFiltered: boolean;
  methods: CheckOption[];
  materials: CheckOption[];
};

const List = (props: ListProps) => {
  
  const filter = (methods: string[], materials: string[]) => {
    const result = [];
    if (methods && materials) {
      for (let i = 0; i < props.items.length; i++) {
        let currentItem = props.items[i];
        let methodExists = methods.every((method) =>
          currentItem.method.includes(method)
        );
        let materialExists = materials.every((material) =>
          currentItem.material.includes(material)
        );
        if (methodExists && materialExists) {
          result.push(currentItem);
        }
      }
    } else {
      if (methods) {
        for (let i = 0; i < props.items.length; i++) {
          let currentItem = props.items[i];
          let methodExists = methods.every((method) =>
            currentItem.method.includes(method)
          );
          if (methodExists) {
            result.push(currentItem);
          }
        }
      }

      if (materials) {
        for (let i = 0; i < props.items.length; i++) {
          let currentItem = props.items[i];
          let materialExists = materials.every((material) =>
            currentItem.material.includes(material)
          );
          if (materialExists) {
            result.push(currentItem);
          }
        }
      }
    }
    return result;
  };

  const getFilters = (type: Filter) => {
    const filters = [];
    const checked = props[type].filter((field) => field.checked);

    for (let item of checked) {
      filters.push(item.type);
    }
    return filters;
  };

  if (props.items.length === 0) {
    return <NoListStyle>조건에 맞는 견적 요청이 없습니다.</NoListStyle>;
  }
  if (props.isFiltered) {
    const methods = getFilters("methods");
    const materials = getFilters("materials");

    return (
      <ListStyle>
        {filter(methods, materials).map((item: CardProps) => (
          <Card
            key={item.id}
            id={item.id}
            title={item.title}
            client={item.client}
            due={item.due}
            count={item.count}
            amount={item.amount}
            method={item.method}
            material={item.material}
            status={item.status}
          />
        ))}
      </ListStyle>
    );
  }
  if (props.onConsultOnly) {
    const filtered = props.items.filter((item) => item.status === "상담중");
    return (
      <ListStyle>
        {filtered.map((item) => (
          <Card
            key={item.id}
            id={item.id}
            title={item.title}
            client={item.client}
            due={item.due}
            count={item.count}
            amount={item.amount}
            method={item.method}
            material={item.material}
            status={item.status}
          />
        ))}
      </ListStyle>
    );
  } else {
    return (
      <ListStyle>
        {props.items.map((item) => (
          <Card
            key={item.id}
            id={item.id}
            title={item.title}
            client={item.client}
            due={item.due}
            count={item.count}
            amount={item.amount}
            method={item.method}
            material={item.material}
            status={item.status}
          />
        ))}
      </ListStyle>
    );
  }
};

export default List;
