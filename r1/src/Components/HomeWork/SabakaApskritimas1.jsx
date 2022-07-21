function SabakaApskritimas1({apskrSab1, numeravimas1, numeravimas1kvad}) {
    return (

    <>
    <div style={
        {
            paddingTop: '5px'
        }
        }>
        <div style={
            {
                backgroundColor: "Lime",
                padding: '5px',
                marginTop: '5px',
                width: '100px',
                height: '100px',
                alignItems: 'center',
                display: 'flex',
                borderRadius:(numeravimas1kvad % 2 === 0) ? '0px' : '50px'
            }
        }> {apskrSab1}{numeravimas1}
    </div>
    </div>
    </>
    
    )
};




export default SabakaApskritimas1;