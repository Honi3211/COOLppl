import Typography from 'components/typography'
import { PADDINGX } from 'constants/layout'
import { motion } from 'framer-motion'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'

const Text = () => {
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down('sm'))
  const item = {
    hidden: { x: -40, y: 0, opacity: 0, transform: "none" },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        delay: 0.4,
      },
    },
  }

  const item2 = {
    hidden: { x: 40, y: 0, opacity: 0, transform: "none" },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        delay: 0.5,
      },
    },
  }
  return (
    <div className={`relative flex max-w-shambWidth py-36 mx-auto flex-col ${PADDINGX}`}>
      <motion.div
        initial="hidden"
        className="hidden md:block !transform-none"
        viewport={{ once: true }}
        whileInView="visible"
        variants={item2}
      >
        <div className="absolute right-0 top-60">
          <img src="/assets/blue-dots.svg" alt="" />
        </div>
      </motion.div>
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={item}>
        <div className="bg-primary-yellow w-[61px] h-[5px] rounded-lg md:hidden mb-6" />
        <div className="flex flex-col  gap-[38px]">
          <div>
            <Typography variant={matches ? 'h3' : 'h2'} className="text-primary-white ">
              816 year
            </Typography>
            <Typography variant={matches ? 'body-mobile' : 'title-small'} className="text-primary-white opacity-70">
              816th anniversary of the Great Mongol Empire
            </Typography>
          </div>
          <div className="gap-[38px]">
            <Typography variant={matches ? 'h3' : 'h2'} className="text-primary-white ">
              2231 year
            </Typography>
            <Typography variant={matches ? 'body-mobile' : 'title-small'} className="text-primary-white opacity-70">
              2231th anniversary of Foundation of the first Mongolian Statehood
            </Typography>
          </div>
          <div>
            <Typography variant={matches ? 'h3' : 'h2'} className="text-primary-white ">
              101 year
            </Typography>
            <Typography variant={matches ? 'body-mobile' : 'title-small'} className="text-primary-white opacity-70">
              101th anniversary of the People’s Revolution of Mongolia
            </Typography>
          </div>
        </div>
      </motion.div>
      <div className="flex flex-col  gap-y-9 gap-x-12">
        <div className="flex flex-col gap-6">
          <Typography
            variant={matches ? 'body-mobile' : 'body-web'}
            className="text-primary-white opacity-70 md:w-[488px]  pt-16"
          >
            As part of these celebrations, historians, scientists and engineers are working together to create a
            36,000-tree "Art-Tech Empire" Land in the desert region.
          </Typography>
          <div className="bg-primary-yellow w-[61px] h-[5px] rounded-lg hidden md:block" />
        </div>

        <div className="flex">
          <svg
            width="644"
            className="transform translate-x-4 hidden md:block"
            height="322"
            viewBox="0 0 658 334"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.6"
              d="M647.061 333.061C646.475 333.646 645.525 333.646 644.939 333.061L635.393 323.515C634.808 322.929 634.808 321.979 635.393 321.393C635.979 320.808 636.929 320.808 637.515 321.393L646 329.879L654.485 321.393C655.071 320.808 656.021 320.808 656.607 321.393C657.192 321.979 657.192 322.929 656.607 323.515L647.061 333.061ZM644.5 332C644.5 330.964 644.492 329.933 644.477 328.909L647.477 328.864C647.492 329.904 647.5 330.949 647.5 332H644.5ZM644.295 322.833C644.205 320.831 644.084 318.853 643.934 316.898L646.926 316.669C647.078 318.656 647.2 320.665 647.292 322.697L644.295 322.833ZM643.397 311.103C643.189 309.195 642.952 307.309 642.686 305.446L645.656 305.022C645.926 306.918 646.168 308.837 646.379 310.778L643.397 311.103ZM641.718 299.445C641.361 297.468 640.971 295.517 640.548 293.592L643.478 292.948C643.909 294.911 644.307 296.899 644.67 298.913L641.718 299.445ZM639.182 287.894C638.695 286.021 638.175 284.172 637.623 282.349L640.495 281.481C641.058 283.341 641.588 285.227 642.086 287.138L639.182 287.894ZM635.776 276.673C635.119 274.789 634.427 272.932 633.7 271.103L636.488 269.995C637.23 271.864 637.938 273.761 638.609 275.685L635.776 276.673ZM631.416 265.697C630.621 263.922 629.792 262.174 628.93 260.452L631.612 259.109C632.494 260.869 633.341 262.656 634.154 264.471L631.416 265.697ZM626.154 255.204C625.192 253.477 624.195 251.779 623.163 250.107L625.716 248.532C626.771 250.241 627.79 251.978 628.775 253.743L626.154 255.204ZM619.966 245.172C618.866 243.552 617.732 241.959 616.565 240.391L618.972 238.6C620.164 240.202 621.323 241.831 622.448 243.487L619.966 245.172ZM612.947 235.741C611.708 234.216 610.437 232.717 609.133 231.244L611.381 229.256C612.711 230.761 614.01 232.291 615.275 233.849L612.947 235.741ZM605.128 226.897C603.771 225.482 602.383 224.091 600.965 222.724L603.047 220.564C604.493 221.958 605.908 223.376 607.293 224.82L605.128 226.897ZM596.663 218.731C595.2 217.423 593.709 216.138 592.189 214.875L594.106 212.568C595.653 213.853 597.173 215.162 598.663 216.495L596.663 218.731ZM587.545 211.151C585.999 209.955 584.427 208.779 582.829 207.624L584.586 205.193C586.21 206.367 587.809 207.562 589.381 208.779L587.545 211.151ZM578.019 204.262C576.391 203.161 574.739 202.079 573.062 201.016L574.668 198.483C576.369 199.561 578.047 200.659 579.7 201.777L578.019 204.262ZM567.962 197.885C566.284 196.887 564.584 195.907 562.862 194.944L564.327 192.325C566.071 193.301 567.794 194.295 569.495 195.307L567.962 197.885ZM557.702 192.142C555.961 191.224 554.2 190.323 552.419 189.438L553.755 186.752C555.556 187.647 557.338 188.559 559.101 189.488L557.702 192.142ZM547.018 186.83C545.243 185.998 543.449 185.18 541.637 184.376L542.853 181.634C544.684 182.446 546.497 183.272 548.292 184.114L547.018 186.83ZM536.247 182.05C534.434 181.289 532.604 180.541 530.757 179.806L531.867 177.019C533.73 177.76 535.578 178.515 537.409 179.284L536.247 182.05ZM525.171 177.642C523.317 176.942 521.448 176.256 519.564 175.581L520.575 172.757C522.475 173.437 524.36 174.129 526.23 174.835L525.171 177.642ZM514.028 173.649C512.17 173.016 510.297 172.394 508.412 171.784L509.336 168.93C511.235 169.545 513.122 170.171 514.995 170.809L514.028 173.649ZM502.717 169.985C500.806 169.396 498.882 168.818 496.947 168.25L497.791 165.371C499.739 165.943 501.676 166.525 503.6 167.118L502.717 169.985ZM491.292 166.63C489.405 166.102 487.508 165.583 485.599 165.073L486.373 162.175C488.293 162.688 490.202 163.209 492.1 163.741L491.292 166.63ZM479.844 163.572C477.915 163.08 475.977 162.597 474.028 162.122L474.738 159.208C476.697 159.685 478.646 160.17 480.585 160.665L479.844 163.572ZM468.203 160.735C466.299 160.292 464.385 159.856 462.464 159.428L463.116 156.5C465.047 156.93 466.969 157.368 468.883 157.813L468.203 160.735ZM456.674 158.165C454.736 157.752 452.791 157.345 450.837 156.946L451.438 154.007C453.4 154.408 455.354 154.816 457.3 155.231L456.674 158.165ZM444.955 155.768C443.012 155.387 441.062 155.012 439.105 154.644L439.66 151.696C441.624 152.066 443.581 152.441 445.532 152.824L444.955 155.768ZM433.294 153.572C431.351 153.221 429.401 152.876 427.446 152.536L427.96 149.58C429.922 149.921 431.878 150.268 433.828 150.62L433.294 153.572ZM421.563 151.533C419.597 151.204 417.625 150.881 415.648 150.562L416.125 147.601C418.108 147.92 420.086 148.244 422.058 148.574L421.563 151.533ZM409.771 149.634C407.823 149.331 405.871 149.034 403.914 148.741L404.358 145.774C406.32 146.068 408.278 146.366 410.231 146.669L409.771 149.634ZM398.03 147.875C396.065 147.59 394.096 147.31 392.123 147.034L392.539 144.063C394.516 144.34 396.49 144.62 398.46 144.906L398.03 147.875ZM386.194 146.218C384.229 145.952 382.262 145.69 380.291 145.431L380.682 142.457C382.656 142.716 384.628 142.979 386.596 143.245L386.194 146.218ZM374.402 144.669C372.436 144.419 370.467 144.172 368.496 143.927L368.865 140.95C370.839 141.195 372.812 141.443 374.781 141.694L374.402 144.669ZM362.577 143.204C360.601 142.966 358.624 142.73 356.645 142.497L356.995 139.518C358.977 139.751 360.957 139.987 362.936 140.225L362.577 143.204ZM350.723 141.809C348.753 141.583 346.781 141.359 344.809 141.137L345.144 138.156C347.119 138.378 349.093 138.602 351.065 138.829L350.723 141.809ZM338.888 140.479C336.914 140.261 334.938 140.045 332.963 139.832L333.285 136.849C335.263 137.063 337.24 137.279 339.217 137.497L338.888 140.479ZM327.034 139.195C325.057 138.985 323.079 138.776 321.102 138.568L321.415 135.584C323.394 135.792 325.373 136.001 327.352 136.212L327.034 139.195ZM315.168 137.948C313.19 137.743 311.213 137.539 309.236 137.336L309.543 134.351C311.52 134.555 313.499 134.759 315.478 134.964L315.168 137.948ZM303.308 136.728C301.333 136.527 299.359 136.326 297.386 136.125L297.689 133.14C299.663 133.341 301.637 133.542 303.613 133.744L303.308 136.728ZM291.454 135.523C289.468 135.322 287.484 135.121 285.502 134.92L285.805 131.935C287.787 132.136 289.771 132.337 291.757 132.538L291.454 135.523ZM279.561 134.316C277.583 134.115 275.607 133.914 273.634 133.712L273.939 130.728C275.912 130.929 277.887 131.131 279.865 131.332L279.561 134.316ZM267.722 133.106C265.744 132.902 263.768 132.698 261.796 132.493L262.107 129.509C264.078 129.714 266.052 129.918 268.029 130.122L267.722 133.106ZM255.829 131.868C253.844 131.659 251.862 131.449 249.883 131.237L250.202 128.254C252.179 128.466 254.159 128.676 256.143 128.885L255.829 131.868ZM243.961 130.599C241.991 130.384 240.025 130.168 238.063 129.951L238.394 126.969C240.353 127.186 242.317 127.402 244.285 127.616L243.961 130.599ZM232.143 129.286C230.146 129.06 228.154 128.831 226.167 128.6L226.513 125.62C228.497 125.851 230.487 126.079 232.481 126.306L232.143 129.286ZM220.223 127.9C218.247 127.664 216.277 127.425 214.313 127.184L214.679 124.206C216.639 124.447 218.606 124.685 220.579 124.921L220.223 127.9ZM208.44 126.451C206.457 126.2 204.482 125.945 202.513 125.688L202.902 122.713C204.867 122.97 206.839 123.224 208.817 123.475L208.44 126.451ZM196.539 124.892C194.555 124.622 192.579 124.35 190.61 124.073L191.028 121.102C192.991 121.378 194.963 121.65 196.942 121.919L196.539 124.892ZM184.729 123.229C182.777 122.944 180.833 122.654 178.898 122.36L179.349 119.394C181.279 119.687 183.217 119.976 185.163 120.261L184.729 123.229ZM172.936 121.434C170.944 121.118 168.961 120.796 166.988 120.469L167.479 117.509C169.444 117.835 171.42 118.156 173.407 118.471L172.936 121.434ZM161.101 119.47C159.149 119.132 157.207 118.787 155.277 118.436L155.814 115.485C157.736 115.834 159.669 116.177 161.613 116.515L161.101 119.47ZM149.445 117.351C147.445 116.97 145.458 116.581 143.484 116.185L144.074 113.244C146.039 113.638 148.016 114.024 150.006 114.404L149.445 117.351ZM137.603 114.974C135.656 114.563 133.722 114.144 131.803 113.716L132.455 110.788C134.363 111.213 136.286 111.63 138.223 112.039L137.603 114.974ZM126.087 112.409C124.094 111.941 122.116 111.463 120.156 110.975L120.88 108.063C122.828 108.548 124.792 109.023 126.773 109.488L126.087 112.409ZM114.311 109.477C112.38 108.967 110.466 108.447 108.57 107.916L109.379 105.027C111.26 105.554 113.159 106.07 115.076 106.576L114.311 109.477ZM102.937 106.29C100.973 105.706 99.0296 105.11 97.1078 104.5L98.0151 101.64C99.9191 102.244 101.845 102.836 103.792 103.415L102.937 106.29ZM91.3608 102.615C89.4673 101.973 87.5961 101.317 85.748 100.647L86.7707 97.8266C88.5984 98.4893 90.4498 99.1382 92.3241 99.7737L91.3608 102.615ZM80.2626 98.5886C78.3342 97.8398 76.433 97.0739 74.5598 96.2903L75.7176 93.5227C77.5661 94.296 79.4434 95.0522 81.3485 95.792L80.2626 98.5886ZM69.0252 93.8856C67.2089 93.0659 65.4214 92.2278 63.6638 91.3707L64.9786 88.6742C66.7087 89.5178 68.4691 90.3433 70.2593 91.1512L69.0252 93.8856ZM58.319 88.6562C56.5019 87.6947 54.7198 86.7106 52.9741 85.703L54.4737 83.1047C56.1865 84.0933 57.9363 85.0596 59.7221 86.0045L58.319 88.6562ZM47.8464 82.6089C46.1637 81.5469 44.5188 80.4603 42.9127 79.3483L44.6205 76.8818C46.1903 77.9687 47.7997 79.0319 49.4476 80.0719L47.8464 82.6089ZM37.9474 75.7325C36.3368 74.4981 34.771 73.2342 33.2515 71.9399L35.1968 69.6561C36.6758 70.9159 38.2014 72.1473 39.7723 73.3513L37.9474 75.7325ZM28.8331 67.9646C27.3474 66.5513 25.9136 65.104 24.5331 63.6215L26.7287 61.5771C28.0667 63.014 29.4578 64.4184 30.9008 65.791L28.8331 67.9646ZM20.5461 59.0584C19.2718 57.5014 18.0527 55.9081 16.8906 54.2776L19.3336 52.5364C20.4563 54.1116 21.6348 55.6519 22.8677 57.1583L20.5461 59.0584ZM13.551 49.2316C12.4962 47.5103 11.5011 45.7503 10.5673 43.9506L13.2302 42.5689C14.1309 44.3049 15.091 46.003 16.1089 47.6642L13.551 49.2316ZM7.95142 38.432C7.17004 36.6179 6.44739 34.7662 5.78467 32.8761L8.61572 31.8835C9.25549 33.7082 9.95294 35.4951 10.7067 37.2453L7.95142 38.432ZM3.98053 27.0992C3.43988 25.1349 2.96045 23.1317 2.54346 21.0889L5.48285 20.4889C5.88654 22.4667 6.3504 24.4044 6.87299 26.3031L3.98053 27.0992ZM1.54156 15.2747C1.26581 13.3248 1.04401 11.3408 0.877075 9.32199L3.86688 9.07484C4.02911 11.037 4.24451 12.9633 4.51202 14.8546L1.54156 15.2747ZM0.542175 3.16065C0.514099 2.11598 0.5 1.06246 0.5 0H3.5C3.5 1.03595 3.51373 2.06262 3.54108 3.08012L0.542175 3.16065Z"
              fill="white"
            />
          </svg>
        </div>
        <div className="flex md:justify-end">
          <div className="flex flex-col gap-6">
            <Typography
              variant={matches ? 'body-mobile' : 'body-web'}
              className="text-primary-white opacity-70 md:opacity-100 md:w-[608px] align-items "
            >
              This Land Art is the second largest Land Art in the world made of planted trees and will be the largest
              Land Art by size. It is also being sold as{' '}
              <span className="md:font-semibold md:text-title1 uppercase text-sm">"Happy Tree"</span> set in cooperation with the Trade and
              Development Bank.
            </Typography>
            <div className="bg-primary-yellow w-[61px] h-[5px] rounded-lg hidden md:block" />
          </div>
        </div>
      </div>
    </div>
  )
}
export default Text