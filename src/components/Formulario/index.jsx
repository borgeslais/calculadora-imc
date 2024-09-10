import React, { useState, useEffect } from "react";
import { calcularIMC, msgTexto } from "../Formula/IMC";

const Formulario = () => {
    const [peso, setPeso] = useState("");
    const [altura, setAltura] = useState("");
    const [IMCData, setIMCData] = useState(null);

    useEffect(() => {
        if (IMCData) {
            console.log("IMCData mudou:", IMCData);
        }
    }, [IMCData]);

    const handlePesoChange = (e) => {
        const valor = e.target.value;
        if (valor < 0) {
            setPeso("");
        } else {
            setPeso(valor);
        }
    };

    const handleAlturaChange = (e) => {
        const valor = e.target.value;
        if (valor < 0) {
            setAltura("");
        } else {
            setAltura(valor);
        }
    };

    const resultadoIMC = () => {
        try {
            const pesoNumber = parseFloat(peso.replace(",", "."));
            const alturaNumber = parseFloat(altura.replace(",", ".")) / 100;

            if (isNaN(pesoNumber) || isNaN(alturaNumber) || pesoNumber < 0 || alturaNumber < 0) {
                throw new Error("Ops... você precisa preencher os campos com números válidos");
            }

            if (pesoNumber < 2 || pesoNumber > 500) {
                throw new Error("Ops... o peso precisa ser maior que 2Kg e menor que 500kg");
            }

            if (alturaNumber < 0.5 || alturaNumber > 2.5) {
                throw new Error("Ops... a altura precisa ser maior que 50cm e menor que 2,5m");
            }

            const IMC = calcularIMC(pesoNumber, alturaNumber).toFixed(2);
            const IMCResultText = msgTexto(IMC);

            setIMCData({
                peso: pesoNumber,
                altura: alturaNumber,
                IMC: parseFloat(IMC, 2),
                result: IMCResultText,
            });


            setPeso("");
            setAltura("");
        } catch (error) {
            alert(error.message);

            setPeso("");
            setAltura("");
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        resultadoIMC();
    };

    return (
        <>
            <form onSubmit={handleSubmit} style={{ fontFamily: 'sans-serif' }}>
                <div className="form__outer">
                    <div className="form__inner">
                        <label htmlFor="peso">Peso (Kg)</label>
                        <input
                            type="number"
            
                            value={peso}
                            onChange={handlePesoChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="altura">Altura (cm)</label>
                        <input
                            type="number"
                        
                            value={altura}
                            onChange={handleAlturaChange}
                        />
                    </div>
                </div>

                <button type="submit">Calcular</button>
            </form>
            {IMCData ? (
                <table className="result">
                    <tbody>
                        <tr>
                            <td className="td__q__result">Peso</td>
                            <td className="td__q__result">Altura</td>
                            <td className="td__q__result">IMC</td>
                            <td className="td__q__result">Resultado</td>
                        </tr>
                        <tr>
                            <td className="td__a__result">{IMCData.peso}</td>
                            <td className="td__a__result">{IMCData.altura}</td>
                            <td className="td__a__result">{IMCData.IMC}</td>
                            <td className="td__a__result">{IMCData.result}</td>
                        </tr>
                    </tbody>
                </table>
            ) : (
                <p>Saiba agora se está no seu peso ideal!</p>
            )}
        </>
    );
};

export default Formulario;