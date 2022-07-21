function SabakaApskritimas({apskrSab, numeravimas}) {
    return (

    <>
        <div style={
            {
                backgroundColor: "red",
                borderRadius: '50px',
                padding: '5px',
                marginTop: '5px',
                width: '100px',
                height: '100px',
                alignItems: 'center',
                display: 'flex'
            }
        }> {apskrSab}{numeravimas}
        </div>
    
    </>
    )
};

export default SabakaApskritimas;