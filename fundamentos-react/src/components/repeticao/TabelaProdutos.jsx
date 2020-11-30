import produtos from '../../data/produtos'

import './TabelaProdutos.css'

export default props => {
    
    function getLinhas(){
        return produtos.map(
            (produto, id) => {
                return (
                    <tr
                    key={produto.id}
                    color={produto.id % 2 === 0 ? 1 : 2}
                    >
                        <td>{produto.id}</td>
                        <td>{produto.nome}</td>
                        <td>R${produto.preco.
                        toFixed(2).
                        replace(".", ",")}</td>
                    </tr>
                )
            }
        )
    }

    return (
        <div className="TabelaProdutos">
            <table>
                <thead>
                    <tr>
                        <th>Código</th>
                        <th>Produto</th>
                        <th>Preço</th>
                    </tr>
                </thead>
                <tbody>
                    {getLinhas()}
                </tbody>
            </table>
        </div>
    )
}