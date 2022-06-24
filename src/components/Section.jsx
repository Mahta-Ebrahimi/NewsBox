/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { useContext } from 'react';
import { MainContext } from './../context/Provider';
import { SwipeableList, SwipeableListItem, SwipeAction, TrailingActions, } from 'react-swipeable-list';
import { variables } from './../variable/variable';
import logo from '../asset/image/logo.png'
import Body from './Body';
import Collapsible from 'react-collapsible';
import { useLocation } from 'react-router';
import { FiInbox } from 'react-icons/fi';
import { IoMdTrash } from 'react-icons/io';
import { FiChevronDown } from 'react-icons/fi';

let v;
const Section = ({ title, news }) => {

    const location = useLocation()

    const context = useContext(MainContext);
   
    if (localStorage.getItem("theme") === 'Dark') {
        v = variables.dark;
    } else {
        v = variables.light;
    }
    const styles = {
        article: css`
			padding: 0.75rem 1.5rem;
			display: flex;
			align-items: center;
			gap: 1rem;
			border-top: 1px solid ${v.secondary_1};
			width:400px;
         
		`,
        img: css`
			height: 4.5rem;
			width: 4.5rem;
			border-radius: 100px;
		`,
        div: css`
			display: flex;
			flex-direction: column;
			gap: 10px;
		`,
        imgDiv: css`
			height: 4.5rem;
			width: 4.5rem;
			border-radius: 100px;
			background: ${v.primary_1}50;
		`,
        link: css`
            text-decoration:none;
            color:black;
            font-weight:800;
        `
       
       

    };

    const findImage = media => {
        if (media !== undefined) {
            return <img css={styles.img} src={media['media-metadata'][0].url} alt="" />;
        }
        return <div css={styles.imgDiv}></div>;
    };


    const archive = (id) => {
        let item = localStorage.getItem("archive")
        if (item && item.length > 0) {
            let arr = JSON.parse(item)
            arr.push(id)
            localStorage.setItem("archive", JSON.stringify(arr))
        } else {
            let arr = []
            arr.push(id)
            localStorage.setItem("archive", JSON.stringify(arr))
        }
    }


    const deleteArchive = (id) => {
        let arrString = localStorage.getItem("archive")
        let arr = JSON.parse(arrString)
        arr = arr.filter(item => item !== id)
        localStorage.setItem("archive", JSON.stringify(arr))
        context.forceUpdate(!context.update)
    }



    return (
        <div style={{ backgroundColor: v.secondary_2 }}>
            <Collapsible open={true} trigger={<SectionHeader title={title} />}>
                {news?.map(item =>

                    <SwipeableList>
                        <SwipeableListItem
                            trailingActions={
                                <TrailingActions  >
                                    <SwipeAction
                                        /* destructive={false} */
                                        onClick={() => location.pathname === "/" ? archive(item.id) : deleteArchive(item.id)}
                                    >
                                        <div style={{ backgroundColor: location.pathname === "/" ? "green" : "red", display: "flex", alignItems: "center", color: "white", justifyContent: "center" }}>
                                            {location.pathname === "/" ? <FiInbox size={30} /> : <IoMdTrash size={30} />}
                                        </div>
                                    </SwipeAction>
                                </TrailingActions>}
                        >
                            <article css={styles.article} style={{backgroundColor: v.secondary_2}} >
                                {findImage(item.media[0])}
                                <div css={styles.div} >
                                    <a href={item.url} style={{ textDecoration: "none",color: v.text_1, fontWeight: "700"}}>
                                        
                                    {item.title}
                                        
                                    </a>

                                    <Body type="card" text={item.abstract} />
                                </div>
                            </article>
                        </SwipeableListItem>
                    </SwipeableList>
                )}

            </Collapsible>
        </div>
    );
}


const SectionHeader = ({ title }) => {
    return (
        <div style={{ display: "flex", alignItems: "center",  borderTop: "1px solid #eee" }}>
            <img src={logo} style={{ width: "30px", height: "30px", border: "1px solid #ccc", boxShadow: "0 0 5px #ccc", borderRadius: "100%", margin: "10px 10px" }} alt="" />
            <h3  style={{color: v.text_1}}>{title}</h3>
 
            <FiChevronDown size={30} style={{color: v.text_1}}/>
        </div>
    )
}



export default Section;