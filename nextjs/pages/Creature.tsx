
export default function Hello(props) {
    const { gene } = props;
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
    return (
    <>
        <label><input type="checkbox" id="animate" checked />Animate</label>
        <div className="container">
            {base}
            {head}
            <img id="shirt" src="assets/shirt.png" />
            <img id="armor" src="assets/armor.png" />
        </div>
    </>);
}
