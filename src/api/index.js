import request from '../utils/request'

// const icode = '3036335EA06C16C0'
// const icode = '60136E793C2E28BB'
// const icode = 'C2CE489D152F6DD7'
// const icode = '6AA814ACBCEAACBB'
// const icode = '2BB0FF8B9CA6179B'
const icode = '1003CAC5A3283EF3'

export function wordCloud() {
    return request({
        url: '/screen/wordcloud',
        method: 'get',
        params: { icode }
    })
}

export function mapScatter() {
    return request({
        url: '/screen/map/scatter',
        method: 'get',
        params: { icode }
    })
}
export function screenData() {
    return request({
        url: '/screen/data',
        method: 'get',
        params: { icode }
    })
}
