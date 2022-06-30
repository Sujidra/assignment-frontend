import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'

import { Modal } from 'antd';

import { Container, ImageWrapper, ImageContainer, SubmitButtom, ButtonContainer, Header } from "./index.styled"

import useLandingPAge from "../../Hooks/LandingPage/useLandingPage"
import useLogout from '../../Hooks/Auth/useLogout';



const LandingPage = () => {

    const [isModalVisible, setIsModalVisible] = useState(false);
    const [selectedVideoURL, setSelectedVideoURL] = useState("")

    /*REDUX DATA*/
    const videos = useSelector((state) => state.videos.videoData)
    const pageNumber = useSelector(state => state.videos.pageNumber)
    const totalCount = useSelector(state => state.videos.totalCount)

    /*HOOK*/
    const dispatch = useDispatch()

    /*CUSTOM HOOKS*/
    const { } = useLandingPAge()
    const { onLogout } = useLogout()


    // useEffect(() => {
    //     getVideo()
    // }, [])


    return (
        <Container>
            <Header>
                <h4>Video Player</h4>
                <button onClick={(e) => { onLogout() }}>Logout</button>
            </Header>
            <ImageWrapper>
                {
                    videos && videos.map((item, i) => {
                        return (
                            <ImageContainer key={i} onClick={() => { setSelectedVideoURL(item.videoUrl); setIsModalVisible(true) }}>
                                <img src={item.imgUrl} />
                                <video autoPlay muted loop>
                                    <source src={item.previewUrl} ></source>
                                </video>
                            </ImageContainer>
                        )
                    })
                }

                <Modal destroyOnClose={true} visible={isModalVisible} footer={null} onCancel={(e) => { setIsModalVisible(false) }}>
                    <br />
                    <video width="470" autoPlay controls>
                        <source src={selectedVideoURL} type="video/webm" ></source>
                    </video>
                </Modal>


            </ImageWrapper>

            <ButtonContainer>
                {Math.ceil(totalCount / pageNumber) > 10 &&
                    <SubmitButtom onClick={(e) => { dispatch({ type: "SER_PAGE_NUMBER", pageNumber: pageNumber + 1 }) }}>Next</SubmitButtom>
                }
            </ButtonContainer>


        </Container>

    )
}


export default LandingPage;