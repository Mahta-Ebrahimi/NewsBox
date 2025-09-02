/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useContext } from 'react';
import { MainContext } from './../context/Provider';
import { variables } from './../variable/variable';

const Heading = ({ type, color, text }) => {
    const context = useContext(MainContext);
    const theme = context.theme;
    let v;
    if (theme === 'dark') {
        v = variables.dark;
    } else {
        v = variables.light;
    }
    const styles = {
        h1: css`
			font-size: 30pt;
			font-weight: bold;
			color: ${color || v.text_1};
		`,
        h2: css`
			font-size: 24pt;
			font-weight: bold;
			color: ${color || v.text_1};
		`,
        h3: css`
			font-size: 15pt;
			font-weight: bold;
			color: ${color || v.text_1};
		`,
        h4: css`
			font-size: 13pt;
			font-weight: bold;
			color: ${color || v.text_1};
			text-transform: uppercase;
			letter-spacing: 1px;
		`,
        h5: css`
			font-size: 12pt;
			font-weight: 700;
			color: ${color || v.text_1};
			height: 20px;
			overflow: hidden;
			width: 100%;
			text-overflow: ellipsis;
			white-space: nowrap;
		`,
    };
    return (
        <>
            {type === 'primary' && <h1 css={styles.h1}>{text}</h1>}
            {type === 'secondary' && <h2 css={styles.h2}>{text}</h2>}
            {type === 'section' && <h3 css={styles.h3}>{text}</h3>}
            {type === 'sub' && <h4 css={styles.h4}>{text}</h4>}
            {type === 'card' && <h5 css={styles.h5}>{text}</h5>}
        </>
    );
};

export default Heading;