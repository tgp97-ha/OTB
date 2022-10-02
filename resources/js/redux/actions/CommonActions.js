import constant from '../../constants'

export const setHeader = (headerList) => {
    return {
        type: constant.SET_HEADER,
        headerList
    }
}