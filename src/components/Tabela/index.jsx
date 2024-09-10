import React from "react";

function TabelaIMC() {
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>IMC</th>
                        <th>Classificação</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="td__q">Menor que 17</td>
                        <td className="td__a">Muito abaixo do peso</td>
                    </tr>
                    <tr>
                        <td className="td__q">Entre 17 e 18,49</td>
                        <td className="td__a">Abaixo do peso</td>
                    </tr>
                    <tr>
                        <td className="td__q">Entre 18,5 e 24,99</td>
                        <td className="td__a">Peso normal</td>
                    </tr>
                    <tr>
                        <td className="td__q">Entre 25 e 29,99</td>
                        <td className="td__a">Acima do Peso</td>
                    </tr>
                    <tr>
                        <td className="td__q">Entre 30 e 34,99</td>
                        <td className="td__a">Obesidade I</td>
                    </tr>
                    <tr>
                        <td className="td__q">Entre 35 e 39,99</td>
                        <td className="td__a">Obesidade II (severa)</td>
                    </tr>
                    <tr>
                        <td className="td__q">Acima de 40</td>
                        <td className="td__a">Obesidade III (Mórbida)</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default TabelaIMC;