
export interface Props {
    gene: string,
    animated: boolean,
    setAnimated: (_: boolean) => void,
}

export default function Creature(props: Props) {
    const { gene, animated, setAnimated } = props;
    let base;
    switch (gene[0]) {
        case 'a': base = <img src="assets/base.png" />; break;
        case 'b': base = <img src="assets/base-skin2.png" />; break;
        case 'c': default: base = <img id="base-skin3" src="assets/base-skin3.png" />; break;
    }
    let head;
    switch (gene[1]) {
        case 'a': head = <img src="assets/cap.png" />; break;
        case 'b': head = <img src="assets/horns.png" />; break;
        case 'c': default: head = <></>; break;
    }
    let body;
    switch (gene[2]) {
        case 'a': body = <img id="shirt" src="assets/shirt.png" />; break;
        case 'b': body = <img id="armor" src="assets/armor.png" />; break;
        case 'c': default: body = <></>; break;
    }
    return (
    <>
        <label><input type="checkbox" id="animate" checked={animated} onChange={() => setAnimated(!animated)}/>Animate</label>
        <div className="container">
            {base}
            {head}
            {body}
        </div>
    </>);
}
