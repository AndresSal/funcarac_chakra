export const talesStates= [
    {
        id:1,
        key:'new',
        value:'nuevo',
        props:{
            x:50,
            y:-70,
            scale:1
        }
    },
    {
        id:2,
        key:'complete',
        value:'liston',
        props:{
            x:45,
            y:-45,
            scale:0.9
        }
    },
    {
        id:3,
        key:'blocked',
        value:'candado',
        props:{
            x:40,
            y:-50,
            scale:0.8
        }
    }
]

export const talesTitleConfig=[
    {
        id:1,
        type:'cover-tale',
        x:-220,
        y:-20,
        style:{
            fontFamily:'Helvetica',
            fontSize:'30px',
            color:'#000',
            align: 'justify'
        }
    },

    {
        id:2,
        type:'ancient-knowledge',
        x:-90,
        y:-20,
        style:{
            fontFamily:'Helvetica',
            fontSize:'40px',
            color:'#000'}
    },

    {
        id:3,
        type:'index-info',
        index_props:{
            x:-20,
            y:-20,
            style:{
                fontFamily:'Helvetica',
                fontSize:'40px',
                color:'#000'
            }
        },
        info_elements:[
            {
                key:'PAGINA',
                x:150,
                y:10,
                style:{
                    fontFamily:'Helvetica',
                    fontSize:'36px',
                    color:'#f5ec2f'
                }
            },
            {
                key:'DE',
                x:60,
                y:10,
                style:{
                    fontFamily:'Helvetica',
                    fontSize:'36px',
                    color:'#f5ec2f'
                }
            }
        ]
    },
    {
        id:4,
        type:'paragraph-text',
        x:-200,
        y:-55,
        style:{
            fontFamily:'Helvetica',
            fontSize:'26px',
            color:'#000',
            align:'center'}
    },

]

export const pagesInfo=[
    {id:1,name:'PORTADA\n DEL RELATO VIVENCIAL'},
    {id:2,name:'LISTA DE\n PIEZAS CONSEGUIDAS'},
    {id:3,name:'ILUSTRACIÓN\n GRÁFICA'},
    {id:4,name:'SABER TRADICIONAL'},
    {id:5,name:'LECTURA DEL RELATO'},
    {id:6,name:'CARNET DEL TESORO\nVIVIENTE'},
    {id:7,name:'CARTILLA INFORMATIVA'},
    {id:8,name:'TRIVIA ANCESTRAL'},
]

export const photoTypes=[
    {id:1,key:'retrato',scale:1},
    {id:2,key:'ejemploIlustracion',scale:1.6},
]