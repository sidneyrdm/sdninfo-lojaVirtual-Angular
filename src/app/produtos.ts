export interface Iproduto {
    id: number;
    descricao: string;
    preco: number;
    descricaoPreco: string;
    imagem: string;
    estoque: number;
}

export interface IProdutoCarrinho extends Iproduto {
    quantidade: number;
}

export const produtos: Iproduto[] = [
    { id: 1, descricao: "Monitor Bluecase 15.4 LED, HDMI/VGA, Preto - BM154K2HVW", preco: 348.99, descricaoPreco: "À vista com -20% Off no PIX Espécie ou Transferência", imagem: "/assets/monitor-BM154K2HVW.jpg", estoque: 5 },
    { id: 2, descricao: "Placa de Vídeo Palit GTX 1050 TI StormX, NVIDIA GeForce 4GB, GDDR5, 128Bit, DVI DP - NE5105T018G1-1070F", preco: 1222.99, descricaoPreco: "À vista com -20% Off no PIX Espécie ou Transferência", imagem: "/assets/Placa de Vídeo Palit GTX 1050 TI StormX.jfif", estoque: 10 }
]