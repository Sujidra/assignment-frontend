/* NPM IMPORTS */
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

/* CUSTOM IMPORTS */
import LandingPageEndpoint from '../../config/endpoints/LandingPage'
import useLogout from '../Auth/useLogout'

const { getVideos } = LandingPageEndpoint

const useLandingPAge = (data) => {


    /* LOCAL STATES */
    const [errorMessage, setErrorMessage] = useState(null)
    const [spinner, setSpinner] = useState(false)


    /* GLOBAL STATES */
    const authToken = useSelector(state => state.user.token)
    const pageNumber = useSelector(state => state.videos.pageNumber)


    /* HOOKS */
    const navigate = useNavigate()
    const dispatch = useDispatch()




    useEffect(() => {
        getVideo()
    }, [pageNumber])

    /* HANDLE GET VIDEO SUBMIT */
    const getVideo = async () => {
        try {

            console.log("Thereee", pageNumber)

            setSpinner(true)

            /* REQUEST */
            let response = await axios({
                method: 'POST',
                url: getVideos,
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    'x-auth': authToken
                },
                data: JSON.stringify({
                    pageNumber: pageNumber,
                })
            })

            setSpinner(false)

            /* FALSE */
            !response.data.success && setErrorMessage(response.data.error)

            /* SUCCESS */
            if (response.data.success) {



                await dispatch({ type: "ADD_VIDEOS", totalCount: response.data.totalCount, video: response.data.videos })

            }

        } catch (e) {
            /* ERROR */
            setSpinner(false)
            setErrorMessage("Something Went Wrong")

        }
    }

    return { errorMessage, spinner, getVideo }


}

export default useLandingPAge