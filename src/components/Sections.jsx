import Section from "./Section";

const Sections = ({ data }) => {

    let filterCategory = localStorage.getItem("categories");
    let cats = JSON.parse(filterCategory)

    return (
        <>
            {cats?.map(category =>
                <Section key={category} title={category} news={data.filter(item => item.section === category)} />)
            }
        </>
    );
}

export default Sections;