import { axiosClient } from '@common/axiosClient'
import { DataResponseModel } from 'models/common'

const voucherService = {
    getVoucherList: async (): Promise<DataResponseModel<any>> => {
        const res = await axiosClient.get('/api/voucher')
        return res.data
    },
}

export default voucherService