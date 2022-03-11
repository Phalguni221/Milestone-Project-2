import styled from "styled-components";
import { categories } from "../../../../Finesse-Project-Sweta Changes/finesse/src/data";
import CategoryItem from "../../../../Finesse-Project-Sweta Changes/finesse/src/components/CategoryItem";


const Container = styled.div`
    display: flex;
    padding: 20px;
    justify-content: space-between;
`;

const Categories = () => {
    return (
        <Container>
        {categories.map((item) => (
            <CategoryItem item={item} key={item.id} />
          ))} 
        </Container>
    );
};

export default Categories;