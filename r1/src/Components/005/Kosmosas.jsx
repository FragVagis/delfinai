import rand from '../../Functions/rand';
function Kosmosas({spalva, krastas, manoStilius}) {

    return (

    <>
    <div style={
        {
            color: spalva,
            fontSize: rand(30, 100) + 'px',
            padding: krastas + 'px'
        }
        }>MAR-SAS</div>
    <div style={manoStilius}>KOS-MOS</div>
    </>
    );

}

export default Kosmosas;