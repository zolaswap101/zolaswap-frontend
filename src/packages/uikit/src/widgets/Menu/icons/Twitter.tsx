import React from 'react'
import Svg from '../../../components/Svg/Svg'
import { SvgProps } from '../../../components/Svg/types'

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg width="28" height="23" viewBox="0 0 28 23" {...props}>
      <path
        d="M25.558 3.99351C25.323 4.05051 25.117 4.09349 24.937 4.12449C25.4478 3.73854 25.8981 3.27847 26.273 2.7595C26.6171 2.27141 26.8867 1.73487 27.073 1.16749C26.3662 1.52854 25.6302 1.82963 24.873 2.06751C24.3556 2.23117 23.8277 2.35944 23.293 2.45148C22.5145 1.64066 21.5109 1.0819 20.4116 0.847357C19.3124 0.612811 18.168 0.71326 17.1265 1.13575C16.0849 1.55824 15.1939 2.28334 14.5687 3.21738C13.9434 4.15143 13.6126 5.25151 13.619 6.37549C13.6364 6.75698 13.6749 7.13722 13.734 7.5145C11.4974 7.30054 9.30899 6.73211 7.25098 5.83051C5.29295 4.73436 3.53197 3.31848 2.04095 1.64149C1.69995 1.59049 1.09597 3.22151 1.24097 5.11451C1.35791 5.90525 1.63775 6.66309 2.06274 7.34009C2.48774 8.01709 3.04864 8.59849 3.70996 9.04749C3.34662 9.0814 2.98051 9.06998 2.62 9.01349C2.10544 8.90098 1.61194 8.70758 1.15796 8.4405C1.15759 9.7891 1.62718 11.0957 2.48596 12.1355C3.27306 13.0962 4.37872 13.7427 5.60199 13.9575L3.25195 14.0425C4.10295 17.4475 7.49198 17.7715 8.42798 17.8225C7.33406 18.7346 6.04742 19.3867 4.66498 19.7295C3.13268 20.0569 1.5659 20.1943 0 20.1385C0 20.1385 7.36901 25.6945 17.044 20.5985C21.181 18.4195 23.527 13.6855 23.957 12.5625C24.7163 10.6278 25.0867 8.56245 25.047 6.4845C25.0423 6.38984 25.0356 6.29582 25.027 6.20249C25.6889 5.82278 26.2981 5.35781 26.839 4.81949C27.276 4.38918 27.6168 3.87114 27.839 3.29951C27.0913 3.57045 26.3299 3.8021 25.558 3.99351Z"
        fill="#E34561"
      />
      <path
        opacity="0.2"
        d="M18.9454 12.3614C18.3114 11.9874 18.8264 11.3774 18.1624 10.8154C16.5574 9.45744 15.8044 8.68345 14.8544 8.64045C14.0544 8.60445 10.9054 7.18545 10.2894 7.07145C9.62443 6.94845 6.4054 5.64443 2.9494 4.77143C2.38434 4.63324 1.79535 4.62436 1.22638 4.74543C1.22638 4.86743 1.23542 4.99143 1.24542 5.11643C1.25978 5.303 1.28646 5.48843 1.32538 5.67145C1.54654 5.61541 1.76372 5.54457 1.9754 5.45945C2.3504 5.30545 3.1434 6.07643 4.6944 6.00443C5.0124 5.98943 8.40941 8.50442 10.7564 8.69742C11.2824 8.74242 6.79442 8.88144 7.90442 9.56644C8.34242 9.83644 11.5044 10.3524 11.7744 9.68943C12.1804 8.68943 13.4284 10.6274 14.1344 11.2554C14.6278 11.6535 15.1645 11.9946 15.7344 12.2724C15.1874 12.3724 14.3424 12.6075 13.5834 12.7445C12.9474 12.8595 10.2434 11.0444 9.10138 11.3444C8.08861 11.4367 7.06827 11.4011 6.06439 11.2384C6.73039 11.0224 7.41038 10.6664 6.86438 10.4824C6.49838 10.3584 4.92242 9.63444 3.58942 9.06244C3.26385 9.08588 2.93662 9.07145 2.61438 9.01945C2.09876 8.90531 1.6046 8.70985 1.15039 8.44044C1.15639 8.5431 1.16376 8.64312 1.17242 8.74045C2.68442 9.11545 6.13637 10.2884 5.32037 11.1404C4.39637 11.0344 2.1664 10.8045 1.6394 10.7875C1.82941 11.2559 2.09453 11.6903 2.42438 12.0734C3.326 12.2041 4.24181 12.2041 5.14343 12.0734C6.38884 12.2965 7.66688 12.2597 8.8974 11.9654C9.2674 11.7984 11.5384 12.9115 11.9154 12.9815C12.2294 13.0385 14.8384 14.8494 16.2724 15.5294C17.2124 15.9754 16.0194 16.7624 15.7134 16.9434C15.5134 17.0624 13.4944 16.8074 12.4394 17.4674C12.0684 17.6994 8.8334 16.3754 7.6604 16.4014C7.44885 16.4172 7.23945 16.4544 7.0354 16.5124C6.22806 16.3455 5.40083 16.2964 4.57941 16.3664C5.03677 16.7843 5.56733 17.1142 6.14441 17.3395C6.86874 17.3687 7.58675 17.4866 8.28241 17.6904C9.00041 18.0024 9.9034 18.5085 8.6474 18.6585C8.0834 18.7265 7.52742 19.3454 6.71442 19.2124C6.58142 19.1904 6.4374 19.1724 6.2854 19.1554C5.76059 19.395 5.21499 19.5862 4.6554 19.7264C3.7921 19.9285 2.91273 20.0543 2.0274 20.1025C3.24918 20.214 4.47751 20.2351 5.70239 20.1654C4.38839 20.6724 3.60238 21.3914 3.53638 21.8814C4.41316 22.1795 5.31377 22.4023 6.22839 22.5474C6.66336 22.5045 7.1024 22.5325 7.52838 22.6304C7.56205 22.6651 7.60305 22.6917 7.64838 22.7084C10.6412 22.893 13.6302 22.2889 16.3164 20.9564C16.0294 20.5494 15.7354 20.1834 16.0544 19.9964C17.2079 19.5203 18.3883 19.1119 19.5894 18.7734C20.8181 17.6256 21.8819 16.3131 22.7504 14.8734C21.5707 13.9091 20.2957 13.0674 18.9454 12.3614ZM19.0274 18.0284C17.3184 18.8534 16.5994 17.8645 14.6064 19.2405C14.1704 19.5405 14.5364 20.2744 15.1284 20.8684L15.0914 20.8565C13.2764 20.4015 12.2154 21.6924 10.6194 21.7564C8.65539 21.8304 5.84137 21.6924 8.91937 19.8204C9.20037 19.7734 9.47039 19.7205 9.72839 19.6715C9.9051 19.6525 10.0749 19.5923 10.2241 19.4958C10.3734 19.3993 10.4979 19.2691 10.5876 19.1158C10.6774 18.9624 10.73 18.7901 10.741 18.6127C10.7521 18.4353 10.7214 18.2578 10.6514 18.0944C11.4714 18.2722 12.3182 18.2885 13.1444 18.1424C13.8514 17.9354 15.0444 18.2424 16.1374 17.8734C16.8124 17.4606 17.3807 16.8947 17.7964 16.2214C18.2214 15.5474 15.7104 14.3574 15.8284 13.7424C15.9497 13.3259 16.191 12.9544 16.5224 12.6744C17.3492 13.0288 18.1338 13.4745 18.8614 14.0035C19.2614 14.3815 20.4844 15.3505 20.6304 16.2875C20.7874 17.2755 19.0684 18.0084 19.0274 18.0294V18.0284Z"
        fill="#90374B"
      />
      <path
        opacity="0.2"
        d="M24.8861 4.14349C25.0754 4.00517 25.2549 3.8538 25.4231 3.69049C25.3571 3.63149 25.2901 3.57351 25.2231 3.51651C24.5101 3.38951 23.8551 3.27849 23.6231 3.25049C22.0121 3.05649 19.4791 2.11651 18.5601 1.00851C18.506 0.94351 18.4572 0.874289 18.4141 0.801514C17.8341 0.884321 17.2706 1.05742 16.7441 1.31451C17.2945 1.87406 17.9271 2.34617 18.6201 2.71451C18.9711 2.86151 25.0901 4.3145 25.3501 4.3985C25.5971 4.3985 25.8621 4.3985 26.1221 4.3895C25.9921 4.2425 25.8551 4.09951 25.7131 3.96051L25.5051 4.01251C25.2751 4.06951 25.0691 4.11249 24.8861 4.14349Z"
        fill="#90374B"
      />
      <path
        opacity="0.2"
        d="M24.9056 8.93051C24.0866 8.31087 23.2996 7.65001 22.5477 6.9505C21.0523 5.26031 18.9618 4.21312 16.7126 4.02753C15.9665 3.85879 15.2367 3.62454 14.5317 3.32751C14.3849 3.5513 14.2542 3.78523 14.1406 4.02753C14.3543 4.09117 14.5637 4.16831 14.7676 4.25851C15.9266 4.77051 17.1107 5.33751 17.2177 5.32751C18.0177 5.24651 18.6097 6.43451 20.2177 7.18451C21.6667 7.85951 23.3176 9.0895 23.6526 10.1925C23.9226 11.0805 22.7456 12.2155 23.3406 12.8855C23.4457 12.9946 23.5697 13.0838 23.7067 13.1485C23.8067 12.9255 23.8886 12.7415 23.9396 12.6085C24.3942 11.4212 24.7181 10.1879 24.9056 8.93051Z"
        fill="#90374B"
      />
      <path
        opacity="0.2"
        d="M22.0517 9.59555C21.6007 9.69555 21.4437 10.1415 21.4377 10.8225C21.4317 11.5035 21.5687 12.0555 22.0297 12.0595C22.4907 12.0635 22.8687 11.5155 22.8747 10.8345C22.8807 10.1535 22.6297 9.47255 22.0517 9.59555Z"
        fill="#90374B"
      />
      <path
        opacity="0.2"
        d="M15.7765 6.82744C16.2355 6.97244 16.6345 7.00342 16.7245 6.72042C16.8145 6.43742 16.5145 6.09042 16.0565 5.94542C15.5985 5.80042 15.0895 5.81242 15.0635 6.19442C15.0435 6.49442 15.3185 6.68444 15.7765 6.82744Z"
        fill="#90374B"
      />
      <path
        d="M17.9459 13.0825C17.7009 13.3695 17.4459 13.6425 17.1839 13.9025C16.0659 15.2905 14.9839 17.2925 12.6349 18.5385C10.2599 19.7985 6.87789 19.3665 4.49589 20.6945C3.79589 21.0825 3.70186 21.5885 3.84086 21.9945C4.72176 22.2759 5.62504 22.4816 6.54088 22.6095C6.37388 22.2585 6.41088 21.7925 7.01488 21.3995C9.00688 20.1045 11.9709 20.2805 13.9599 19.0445C16.3379 17.5665 17.0439 15.2365 18.2179 14.0265C18.7599 13.4675 20.6049 10.3696 24.5179 10.8626C24.5999 10.5626 24.6789 10.2336 24.7509 9.89255C20.7859 9.44355 18.6249 12.4225 17.9459 13.0825Z"
        fill="#F0DEDA"
      />
      <path
        d="M14.1866 15.4294C14.0656 15.0634 12.9707 15.0965 11.7397 15.5035C10.5087 15.9105 9.60964 16.5364 9.73064 16.9034C9.85164 17.2704 10.9477 17.2364 12.1777 16.8294C13.4077 16.4224 14.3046 15.7994 14.1866 15.4294Z"
        fill="#F0DEDA"
      />
      <path
        d="M11.6609 10.2055C12.393 9.42902 12.919 8.48156 13.1909 7.44955C12.8489 7.40855 12.3469 7.33853 11.7399 7.22253C11.7138 8.46899 11.2039 9.65643 10.3179 10.5335C9.73287 11.2335 8.68888 11.7546 8.08588 12.4076C7.28588 13.2766 8.56089 14.7076 6.30389 16.1136C5.89167 16.3613 5.45629 16.5683 5.00391 16.7315C5.13124 16.8222 5.26088 16.9052 5.39288 16.9806C6.05504 16.7592 6.69031 16.4643 7.28687 16.1016C9.68687 14.5726 8.4049 13.1416 9.2699 12.2176C9.9239 11.5226 11.0269 10.9445 11.6609 10.2055Z"
        fill="#F0DEDA"
      />
      <path
        d="M9.91418 6.79947C9.79485 6.76547 9.67419 6.73015 9.55219 6.69348C9.23495 7.22848 8.8575 7.72537 8.42719 8.17447C7.60675 9.07014 6.53377 9.69571 5.35016 9.96848C4.3944 10.0515 3.44676 10.2103 2.51617 10.4435C2.2316 10.5671 1.95855 10.7157 1.7002 10.8875C1.88957 11.3284 2.14663 11.737 2.46216 12.0985C2.58398 11.7876 2.7922 11.518 3.06219 11.3215C3.84419 10.7535 5.29014 10.6885 6.27814 10.2585C7.31325 9.81176 8.20699 9.09124 8.86316 8.17447C9.25916 7.63847 9.61518 7.17747 9.91418 6.79947Z"
        fill="#F0DEDA"
      />
      <path
        d="M21.4298 14.8055C20.204 15.1239 19.1064 15.813 18.2868 16.7785C17.938 17.233 17.7326 17.7812 17.697 18.353C17.6614 18.9248 17.7971 19.4942 18.0868 19.9885C18.3121 19.8365 18.5311 19.6778 18.7438 19.5125C18.503 18.7779 18.5386 17.9807 18.8438 17.2705C19.5099 16.1766 20.5777 15.3868 21.8188 15.0705C22.1038 14.9815 22.4418 14.9014 22.8068 14.8224C22.8781 14.7044 22.9468 14.5888 23.0128 14.4755C22.4791 14.5545 21.9506 14.6647 21.4298 14.8055Z"
        fill="#F0DEDA"
      />
      <path
        d="M23.2888 2.44446C23.076 2.22735 22.847 2.0268 22.6038 1.84448C22.5961 2.36207 22.4785 2.87208 22.2589 3.34082C22.0392 3.80956 21.7226 4.22632 21.3298 4.56348C20.2228 5.20961 18.9067 5.39628 17.6638 5.08347C16.7638 4.90847 15.4638 4.40347 14.2958 4.22247C14.2178 4.21047 14.1387 4.20147 14.0577 4.19647C14.0264 4.26981 13.9971 4.34413 13.9697 4.41946C14.0577 4.42454 14.1452 4.43524 14.2318 4.45148C15.9038 4.76748 16.3388 5.13746 17.8768 5.49646C19.1051 5.79982 20.3971 5.71707 21.5767 5.25946C22.114 5.01937 22.5655 4.62151 22.8713 4.11871C23.1771 3.61591 23.3227 3.03196 23.2888 2.44446Z"
        fill="#F0DEDA"
      />
    </Svg>
  )
}

export default Icon