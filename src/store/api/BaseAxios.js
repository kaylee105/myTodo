import axios from 'axios';
import store from '@/store'

const DEFAULT_HEADERS = {
    'Content-Type': 'application/json',
    'Access-Controll-Allow-Origin': '*'
}

const BASE_URL = 'http://api.stickinteractive.com'

function responseInterceptors(axiosInst) {
      axiosInst.interceptors.request.use(
            function (config) {
                  store.dispatch('setBeforeLoading',true)
                  return config;
            },
            function (error) {
                  return Promise.reject(error);
            });

    axiosInst.interceptors.response.use(
        function (response) {
            setTimeout(() => {
                  store.dispatch('setBeforeLoading',false)
            }, 800);

            return response.data;
        },
        function (error) {
            if (error.response.status === 403) {
                // 인증 만료
                return Promise.reject({
                    code: 403,
                    message: '인증 기간이 만료 되었습니다.',

                });
            }else if(error.response.status === 500){
                  return Promise.reject({
                        code: 500,
                        message: error.message
                    });

            } else if (error.response.status === 401) {
                 // 인증 정보 불일치
                return Promise.reject({
                    code: 401,
                    message: '인증 정보가 없습니다.'
                });
            }
        }
    )

    return axiosInst
}

// 인증이 필요 없는 기본 통신 axios instance
export function axiosDefault() {
    return responseInterceptors(
        axios.create({
            baseURL: BASE_URL,
            headers: DEFAULT_HEADERS,
        })
    )
}