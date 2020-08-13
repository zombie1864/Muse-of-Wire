import React from 'react'; 
import ReactPlayer from 'react-player'

class CreatorPage extends React.Component {
    render() {
        return (
            <div>
                <div className='performer'>
                    <img src='https://images.pexels.com/photos/2078265/pexels-photo-2078265.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260'></img>
                    <p>
                        Johnathan Mathews 
                    </p>
                    <p>
                        Brooklyn, NY
                    </p>
                    <ReactPlayer
                    className="react-player"
                    url="https://www.youtube.com/watch?v=V-_GUXIBUiQ"
                    width="720px"
                    height="460px"
                    />
                </div>
                <div className='performer'>
                    <img src='https://images.pexels.com/photos/547593/pexels-photo-547593.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260'></img>
                    <p>
                        George Czeslov 
                    </p>
                    <p>
                        Brooklyn, NY
                    </p>

                    <ReactPlayer
                    className="react-player"
                    url="https://www.youtube.com/watch?v=V-_GUXIBUiQ"
                    width="720px"
                    height="460px"
                    />
                </div>
                <div className='performer'>
                    <img src='https://lh3.googleusercontent.com/K2ajKuJnLSKzTOKmS6iBEfX80O2SqtBuPzl8dwYjX6-2d7rXdzJsBAi0S3VR_0Q0kKtqzJBOktRUwwZktVX0GjQ5UDQimhZ-IvtHlxqjgtMmYw31FWT4Dfh3ucxHptclDIF24m91orqoN4XhtHWlBOTKUtzuiTfOga8ZNm9pzmCwES0m_KFPS9Q6uoTzbqSG2IgECHPmc8eRWqNzOFZJ3q4BCCWLk9yZvpwAjTKZv2hGdT6rwK5QK6FhwcTosQTBFcUT-97Z8X15g3M-gLR3_DKx2mLPB3YSRdiZJu1UyTKPSukjjxWVDoLFvtAWLFJs4iv98YbMqrXKOgD-ETSRNx6-wRNdT2J0WUwsK7H3du6mACh2cv9JnaIb5q5XD0KpoV3tkE_GEjEQ4EbSm7Ttxvg8Lsm-Vm3g3mKp4iczXfSpg_SdmYH4pCVGdh5ci6-txbARzb-OzIEkdubR_NJpil-fGDttYIP-MFfeIMMlwrXwWtStcLu5VKYI_TSVN7TKbTy6nULomOf2_94EY27XlmW80iwsyFe4FFjikLVo6PXeIerBH1YbBLTbvL9V6HnE7tK14scK7haGzLIOoLCUMDQ6qfhadDrFoUHdC2mV2fGNHL2-XTTDd0ZeWSfDx2didVETWk3bmtjfw1789R8UWnCQEpuH0WHgF4MnmuTMLf47-Ex2ukc6immMMkijya4bzu1W=w1721-h901-ft'>
                    </img>
                    <p>
                        Zhang Peter Wei 
                    </p>
                    <p>
                        Brooklyn, NY
                    </p>
                    <ReactPlayer
                    className="react-player"
                    url="https://www.youtube.com/watch?v=V-_GUXIBUiQ"
                    width="720px"
                    height="460px"
                    />
                </div>
                <div>
                    <img src = 'https://lh3.googleusercontent.com/n9Z5jFS6obujkpNd_DQ7_qsMvBVWsNwKCNi_pwir5urDsjmiVsjATaIKXfhN-bMZmhYV3zoWtJTPrfTls7HVB1kYF-kq771cg2kfD1xtL3S06w48C7TUCso7c1Ejuy8RolO8ULDziqKcfqhThuUiSBFC-sLMncpKQPf8L6Y6lf9Y7Wk8tvVPPpEW2jO4kXS726v-_EyPQX1Gr2N8esdNPDGOfR7mG7CQHulYk3cNGJyIugdVXpbg3MyiQL_KKJtngkLSJg7cHIlDPelq4sn2t2gjLoaS-VHXh1twuUiMnjDc5fJgoBnp-efiWqOBf67k4qo8poBGvZgHjKyrzF5ovkJlyhfy3TYM1x1bXqa7dxBtZlHmbIbSy2D-YCNjl-63J_S2ZZwLXE6URQQ4zMKdX-2T3sOQjXdyMOm3WDO07OHUq-k18pTKkulIsd49JGMIjO02pEv-KKRpROe6T83aVTxSFe9fdbaxO_3BdWljw6jhnpe-B-um7gVRqFsaArMVPQcz0dFGqPc-YXDEmPwDuUGivwxHnOxayZ9DJZt-yF6t8eftWRe2ovR9lq8nHb7sDhZF_kLV6U93pglZRqzamO14Er-Z8xtPJb2zCof-eZUN0_o0XL-9cBAnmqUAihShnfVh8rtBLGgEbgwuskWY7ACvQrsoVAj4liX6SKxqHQWnPyv3RENMTjLkR3HskzSjb1gb=w1721-h901-ft'></img>
                    <p>
                        Tyron Kingston 
                    </p>
                    <p>
                        Brooklyn, NY
                    </p>
                    <ReactPlayer
                    className="react-player"
                    url="https://www.youtube.com/watch?v=V-_GUXIBUiQ"
                    width="720px"
                    height="460px"
                    />
                </div>
            </div>
        )
    }
}

export default CreatorPage
