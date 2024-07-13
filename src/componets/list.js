import Item from './Item'

function List(){
    return(
    <div>
    <h1>Lista</h1>
    <ul>
        <Item marca = 'MISTSUBISHI' lançamento={1899}/>
        <Item marca = 'FERRARI'lançamento={1989}/>
        <Item marca = 'CORSA'lançamento={1999}/>
        <Item/>
    </ul>
    </div>
     
    )
}

export default List