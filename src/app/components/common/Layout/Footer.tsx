/* eslint-disable react/no-unescaped-entities */
import { Divider } from "@nextui-org/react";
import Image from "next/image";
import React from "react";

export const Footer = () => {
  return (
    <footer className="flex flex-col gap-10 lg:gap-16 items-center bg-[#2E3A41] border-1 border-[#5C666C] py-12 p-4">
      <div className="flex flex-col gap-4 items-center justify-center text-center">
        <Image src="/Logo.png" width={200} height={200} alt="logo" />
        <p className="text-sm text-[#E9EAEA] lg:w-[70%] mt-2">
          Immerse yourself in the exclusive advantages and perks of being a
          member of the world's best SocialFi platform powered by Nimbi. Step
          into a realm of creativity, high engagement, and fantastic rewards by
          becoming a part of the Nimbi community today!
        </p>
      </div>
      <div className="flex flex-col items-center w-full">
        <hr className="lg:w-[95%] w-full" />
      </div>
      <div className="flex flex-col gap-6 items-center justify-center text-left">
        <div className="flex flex-col lg:flex-row items-left lg:items-center justify-center gap-10 lg:gap-40 w-full">
          <Image src="/Logo.png" width={100} height={100} alt="logo" />
          <div className="flex flex-col lg:flex-row items-left lg:items-center gap-5 text-xs font-semibold">
            <span className="cursor-pointer">Terms Of Services</span>
            <span className="cursor-pointer">Privacy Policy</span>
            <span className="cursor-pointer"> Contact Us</span>
            <span className="cursor-pointer">Token Sale Agreement</span>
            <span className="cursor-pointer">Buy Nimbi</span>
          </div>
          <div className="hidden lg:flex items-center gap-5 ">
            <span className="tetx-sm text-[#A1A7AA] font-medium">
              Follow us
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
            >
              <path
                d="M14.4976 12.5422C14.4976 13.9102 13.3888 15.0189 12.0209 15.0189C10.6529 15.0189 9.54492 13.9102 9.54492 12.5422C9.54492 11.1742 10.6537 10.0654 12.0209 10.0654C13.388 10.0654 14.4976 11.1742 14.4976 12.5422Z"
                fill="url(#paint0_radial_3134_1031)"
              />
              <path
                d="M18.0696 9.53991C18.0368 8.81513 17.916 8.42153 17.8144 8.15994C17.6792 7.81275 17.5192 7.56555 17.2584 7.30556C16.9984 7.04556 16.7505 6.88396 16.4041 6.74957C16.1417 6.64877 15.7489 6.52717 15.0241 6.49437C14.2401 6.45837 14.0049 6.45117 12.0217 6.45117C10.0386 6.45117 9.80339 6.45837 9.0202 6.49437C8.29622 6.52717 7.90183 6.64797 7.64023 6.74957C7.29304 6.88396 7.04584 7.04476 6.78585 7.30556C6.52585 7.56555 6.36506 7.81355 6.22986 8.15994C6.12906 8.42233 6.00746 8.81513 5.97386 9.53991C5.93866 10.3239 5.93066 10.5583 5.93066 12.5423C5.93066 14.5262 5.93786 14.7614 5.97386 15.5446C6.00666 16.2694 6.12746 16.663 6.22986 16.9246C6.36426 17.2718 6.52505 17.519 6.78585 17.779C7.04584 18.0389 7.29384 18.1997 7.64023 18.3349C7.90183 18.4373 8.29542 18.5573 9.0202 18.5909C9.80339 18.6269 10.0378 18.6341 12.0217 18.6341C14.0057 18.6341 14.2409 18.6269 15.0241 18.5909C15.7489 18.5581 16.1425 18.4373 16.4041 18.3349C16.7513 18.1997 16.9984 18.0389 17.2584 17.779C17.5184 17.519 17.6792 17.2718 17.8144 16.9246C17.916 16.663 18.0368 16.2694 18.0696 15.5446C18.1056 14.7606 18.1128 14.5262 18.1128 12.5423C18.1128 10.5583 18.1056 10.3239 18.0696 9.53991ZM12.0209 16.3574C9.91379 16.3574 8.20582 14.6494 8.20582 12.5423C8.20582 10.4351 9.91379 8.72713 12.0209 8.72713C14.1281 8.72713 15.8361 10.4351 15.8361 12.5423C15.8361 14.6494 14.1281 16.3574 12.0209 16.3574ZM15.9865 9.46791C15.4945 9.46791 15.0953 9.06872 15.0953 8.57593C15.0961 8.08394 15.4945 7.68475 15.9873 7.68475C16.4801 7.68475 16.8785 8.08474 16.8785 8.57673C16.8785 9.06952 16.4793 9.46791 15.9865 9.46791Z"
                fill="url(#paint1_radial_3134_1031)"
              />
              <path
                d="M21.9292 7.5711C21.8748 6.38152 21.6772 5.73594 21.5092 5.30555C21.2876 4.73596 21.0244 4.32956 20.5964 3.90317C20.1692 3.47598 19.7629 3.21119 19.1941 2.99039C18.7629 2.82399 18.1181 2.6248 16.9285 2.5704C15.6421 2.5128 15.2565 2.5 11.9998 2.5C8.74387 2.5 8.35748 2.512 7.0711 2.5704C5.88152 2.6248 5.23594 2.82239 4.80555 2.99039C4.23516 3.21119 3.82956 3.47598 3.40237 3.90317C2.97598 4.33116 2.71199 4.73676 2.49039 5.30635C2.32399 5.73674 2.1248 6.38232 2.0704 7.5711C2.0128 8.85828 2 9.24307 2 12.5006C2 15.7581 2.012 16.1437 2.0712 17.4293C2.1256 18.6189 2.32319 19.2645 2.49119 19.6949C2.71199 20.2645 2.97598 20.67 3.40317 21.0972C3.83036 21.5244 4.23676 21.7876 4.80635 22.01C5.23594 22.1772 5.88232 22.3756 7.0719 22.43C8.35748 22.4892 8.74387 22.5004 11.9998 22.5004C15.2573 22.5004 15.6437 22.4884 16.9293 22.43C18.1189 22.3756 18.7645 22.178 19.1949 22.01C19.7645 21.7884 20.1708 21.5244 20.5972 21.0972C21.0244 20.6708 21.2876 20.2645 21.51 19.6949C21.6764 19.2653 21.8756 18.6189 21.93 17.4293C21.9892 16.1421 22.0004 15.7565 22.0004 12.4998C21.9996 9.24307 21.9876 8.85748 21.9292 7.5711ZM19.4053 15.6053C19.3701 16.3965 19.2437 16.9365 19.0605 17.4085C18.8701 17.8973 18.6173 18.3117 18.2037 18.7245C17.7901 19.1373 17.3757 19.3917 16.8877 19.5813C16.4157 19.7653 15.8749 19.8901 15.0845 19.9261C14.2926 19.9629 14.039 19.9709 12.0214 19.9709C10.0038 19.9709 9.75105 19.9621 8.95826 19.9261C8.16708 19.8901 7.62789 19.7645 7.1551 19.5813C6.66551 19.3909 6.25192 19.1373 5.83913 18.7245C5.42553 18.3117 5.17194 17.8965 4.98234 17.4085C4.79835 16.9365 4.67355 16.3965 4.63755 15.6053C4.60075 14.8134 4.59275 14.5598 4.59275 12.5422C4.59275 10.5246 4.60075 10.271 4.63755 9.47906C4.67195 8.68868 4.79675 8.14789 4.98074 7.6759C5.17034 7.18711 5.42393 6.77272 5.83753 6.35992C6.25112 5.94713 6.66551 5.69274 7.1535 5.50314C7.62549 5.31914 8.16628 5.19435 8.95666 5.15835C9.74945 5.12155 10.003 5.11355 12.0206 5.11355C14.0382 5.11355 14.291 5.12235 15.0837 5.15835C15.8741 5.19355 16.4141 5.31994 16.8869 5.50314C17.3749 5.69274 17.7893 5.94633 18.2021 6.35992C18.6149 6.77352 18.8693 7.18711 19.0589 7.6759C19.2429 8.14789 19.3677 8.68868 19.4037 9.47906C19.4397 10.271 19.4485 10.5246 19.4485 12.5422C19.4485 14.5598 19.4413 14.8126 19.4053 15.6053Z"
                fill="url(#paint2_radial_3134_1031)"
              />
              <path
                d="M14.4976 12.5422C14.4976 13.9102 13.3888 15.0189 12.0209 15.0189C10.6529 15.0189 9.54492 13.9102 9.54492 12.5422C9.54492 11.1742 10.6537 10.0654 12.0209 10.0654C13.388 10.0654 14.4976 11.1742 14.4976 12.5422Z"
                fill="#A1A7AA"
              />
              <path
                d="M18.0696 9.53991C18.0368 8.81513 17.916 8.42153 17.8144 8.15994C17.6792 7.81275 17.5192 7.56555 17.2584 7.30556C16.9984 7.04556 16.7505 6.88396 16.4041 6.74957C16.1417 6.64877 15.7489 6.52717 15.0241 6.49437C14.2401 6.45837 14.0049 6.45117 12.0217 6.45117C10.0386 6.45117 9.80339 6.45837 9.0202 6.49437C8.29622 6.52717 7.90183 6.64797 7.64023 6.74957C7.29304 6.88396 7.04584 7.04476 6.78585 7.30556C6.52585 7.56555 6.36506 7.81355 6.22986 8.15994C6.12906 8.42233 6.00746 8.81513 5.97386 9.53991C5.93866 10.3239 5.93066 10.5583 5.93066 12.5423C5.93066 14.5262 5.93786 14.7614 5.97386 15.5446C6.00666 16.2694 6.12746 16.663 6.22986 16.9246C6.36426 17.2718 6.52505 17.519 6.78585 17.779C7.04584 18.0389 7.29384 18.1997 7.64023 18.3349C7.90183 18.4373 8.29542 18.5573 9.0202 18.5909C9.80339 18.6269 10.0378 18.6341 12.0217 18.6341C14.0057 18.6341 14.2409 18.6269 15.0241 18.5909C15.7489 18.5581 16.1425 18.4373 16.4041 18.3349C16.7513 18.1997 16.9984 18.0389 17.2584 17.779C17.5184 17.519 17.6792 17.2718 17.8144 16.9246C17.916 16.663 18.0368 16.2694 18.0696 15.5446C18.1056 14.7606 18.1128 14.5262 18.1128 12.5423C18.1128 10.5583 18.1056 10.3239 18.0696 9.53991ZM12.0209 16.3574C9.91379 16.3574 8.20582 14.6494 8.20582 12.5423C8.20582 10.4351 9.91379 8.72713 12.0209 8.72713C14.1281 8.72713 15.8361 10.4351 15.8361 12.5423C15.8361 14.6494 14.1281 16.3574 12.0209 16.3574ZM15.9865 9.46791C15.4945 9.46791 15.0953 9.06872 15.0953 8.57593C15.0961 8.08394 15.4945 7.68475 15.9873 7.68475C16.4801 7.68475 16.8785 8.08474 16.8785 8.57673C16.8785 9.06952 16.4793 9.46791 15.9865 9.46791Z"
                fill="#A1A7AA"
              />
              <path
                d="M21.9292 7.5711C21.8748 6.38152 21.6772 5.73594 21.5092 5.30555C21.2876 4.73596 21.0244 4.32956 20.5964 3.90317C20.1692 3.47598 19.7629 3.21119 19.1941 2.99039C18.7629 2.82399 18.1181 2.6248 16.9285 2.5704C15.6421 2.5128 15.2565 2.5 11.9998 2.5C8.74387 2.5 8.35748 2.512 7.0711 2.5704C5.88152 2.6248 5.23594 2.82239 4.80555 2.99039C4.23516 3.21119 3.82956 3.47598 3.40237 3.90317C2.97598 4.33116 2.71199 4.73676 2.49039 5.30635C2.32399 5.73674 2.1248 6.38232 2.0704 7.5711C2.0128 8.85828 2 9.24307 2 12.5006C2 15.7581 2.012 16.1437 2.0712 17.4293C2.1256 18.6189 2.32319 19.2645 2.49119 19.6949C2.71199 20.2645 2.97598 20.67 3.40317 21.0972C3.83036 21.5244 4.23676 21.7876 4.80635 22.01C5.23594 22.1772 5.88232 22.3756 7.0719 22.43C8.35748 22.4892 8.74387 22.5004 11.9998 22.5004C15.2573 22.5004 15.6437 22.4884 16.9293 22.43C18.1189 22.3756 18.7645 22.178 19.1949 22.01C19.7645 21.7884 20.1708 21.5244 20.5972 21.0972C21.0244 20.6708 21.2876 20.2645 21.51 19.6949C21.6764 19.2653 21.8756 18.6189 21.93 17.4293C21.9892 16.1421 22.0004 15.7565 22.0004 12.4998C21.9996 9.24307 21.9876 8.85748 21.9292 7.5711ZM19.4053 15.6053C19.3701 16.3965 19.2437 16.9365 19.0605 17.4085C18.8701 17.8973 18.6173 18.3117 18.2037 18.7245C17.7901 19.1373 17.3757 19.3917 16.8877 19.5813C16.4157 19.7653 15.8749 19.8901 15.0845 19.9261C14.2926 19.9629 14.039 19.9709 12.0214 19.9709C10.0038 19.9709 9.75105 19.9621 8.95826 19.9261C8.16708 19.8901 7.62789 19.7645 7.1551 19.5813C6.66551 19.3909 6.25192 19.1373 5.83913 18.7245C5.42553 18.3117 5.17194 17.8965 4.98234 17.4085C4.79835 16.9365 4.67355 16.3965 4.63755 15.6053C4.60075 14.8134 4.59275 14.5598 4.59275 12.5422C4.59275 10.5246 4.60075 10.271 4.63755 9.47906C4.67195 8.68868 4.79675 8.14789 4.98074 7.6759C5.17034 7.18711 5.42393 6.77272 5.83753 6.35992C6.25112 5.94713 6.66551 5.69274 7.1535 5.50314C7.62549 5.31914 8.16628 5.19435 8.95666 5.15835C9.74945 5.12155 10.003 5.11355 12.0206 5.11355C14.0382 5.11355 14.291 5.12235 15.0837 5.15835C15.8741 5.19355 16.4141 5.31994 16.8869 5.50314C17.3749 5.69274 17.7893 5.94633 18.2021 6.35992C18.6149 6.77352 18.8693 7.18711 19.0589 7.6759C19.2429 8.14789 19.3677 8.68868 19.4037 9.47906C19.4397 10.271 19.4485 10.5246 19.4485 12.5422C19.4485 14.5598 19.4413 14.8126 19.4053 15.6053Z"
                fill="#A1A7AA"
              />
              <defs>
                <radialGradient
                  id="paint0_radial_3134_1031"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(9.86516 10.1741) scale(6.28897)"
                >
                  <stop offset="0.09" stop-color="#FA8F21" />
                  <stop offset="0.78" stop-color="#D82D7E" />
                </radialGradient>
                <radialGradient
                  id="paint1_radial_3134_1031"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(6.71869 6.7179) scale(15.4672)"
                >
                  <stop offset="0.09" stop-color="#FA8F21" />
                  <stop offset="0.78" stop-color="#D82D7E" />
                </radialGradient>
                <radialGradient
                  id="paint2_radial_3134_1031"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(3.29435 2.93813) scale(25.3921)"
                >
                  <stop offset="0.09" stop-color="#FA8F21" />
                  <stop offset="0.78" stop-color="#D82D7E" />
                </radialGradient>
              </defs>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="21"
              height="21"
              viewBox="0 0 21 21"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M10.3343 20.4951C10.2957 20.4967 10.2572 20.4967 10.2202 20.4982C10.2587 20.4967 10.2973 20.4967 10.3343 20.4951Z"
                fill="#A1A7AA"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M9.98145 20.4996C9.99686 20.4996 10.0138 20.4996 10.0292 20.4996C10.0801 20.4996 10.1294 20.4996 10.1803 20.498C10.1294 20.498 10.0801 20.4996 10.0292 20.4996C10.0138 20.4996 9.99686 20.4996 9.98145 20.4996Z"
                fill="#A1A7AA"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M10.0295 0.5C4.48993 0.5 0 4.97663 0 10.4998C0 15.897 4.28801 20.2937 9.65189 20.4935C9.10933 20.4735 8.57757 20.4105 8.05968 20.3075V12.6928H6.42277V9.97423H8.05814V8.34217C8.05814 6.1246 8.9814 4.80605 11.6063 4.80605H13.7904V7.52461H12.4248C11.4029 7.52461 11.335 7.90419 11.335 8.61418L11.3319 9.97423H13.8058L13.516 12.6928H11.3319V20.4166C11.0622 20.452 10.7925 20.475 10.5212 20.4889C15.8311 20.2322 20.0575 15.8585 20.0575 10.5013C20.059 4.97663 15.5691 0.5 10.0295 0.5Z"
                fill="#A1A7AA"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M9.81396 20.498C9.84325 20.498 9.87254 20.4996 9.90182 20.4996C9.87254 20.498 9.84325 20.498 9.81396 20.498Z"
                fill="#A1A7AA"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M9.66309 20.4932C9.70008 20.4947 9.73861 20.4962 9.7756 20.4962C9.73861 20.4947 9.70162 20.4947 9.66309 20.4932Z"
                fill="#A1A7AA"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M10.5101 20.4893C10.4655 20.4908 10.4192 20.4939 10.3745 20.4954C10.4192 20.4923 10.4639 20.4908 10.5101 20.4893Z"
                fill="#A1A7AA"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
            >
              <path
                d="M13.9027 10.9686L21.3482 2.5H19.5838L13.119 9.8532L7.95547 2.5H2L9.8082 13.6193L2 22.5H3.76443L10.5915 14.7348L16.0445 22.5H22L13.9023 10.9686H13.9027ZM11.4861 13.7173L10.695 12.6101L4.40018 3.79968H7.11025L12.1902 10.9099L12.9813 12.0172L19.5847 21.2594H16.8746L11.4861 13.7177V13.7173Z"
                fill="#A1A7AA"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="21"
              viewBox="0 0 20 21"
              fill="none"
            >
              <g clip-path="url(#clip0_3134_1444)">
                <path
                  d="M10.4423 17.1486L6.33952 17.0761C5.01068 17.051 3.67885 17.1012 2.37709 16.8403C0.39538 16.4498 0.254975 14.5372 0.108553 12.9329C-0.0940309 10.6771 -0.0158052 8.38083 0.366296 6.14443C0.581918 4.889 1.43036 4.14096 2.74215 4.05881C7.17192 3.76307 11.6308 3.79786 16.0505 3.93607C16.5169 3.94863 16.9872 4.01822 17.4475 4.0965C19.7191 4.48019 19.7752 6.64796 19.9227 8.47264C20.0691 10.3157 20.0079 12.1684 19.7271 13.9998C19.5015 15.5153 19.0712 16.7871 17.252 16.9099C14.9734 17.0703 12.747 17.1998 10.4624 17.1582C10.4624 17.1486 10.4484 17.1486 10.4423 17.1486ZM8.03039 13.3108C9.74734 12.3607 11.4322 11.4261 13.1391 10.4829C11.4192 9.53285 9.73731 8.59828 8.03039 7.65501V13.3108Z"
                  fill="#A1A7AA"
                />
              </g>
              <defs>
                <clipPath id="clip0_3134_1444">
                  <rect
                    width="19.9996"
                    height="19.9996"
                    fill="white"
                    transform="translate(0 0.5)"
                  />
                </clipPath>
              </defs>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
            >
              <path
                d="M20.5217 2.54004H3.47788C2.66183 2.54004 2 3.17923 2 3.96721V21.0333C2 21.8213 2.66183 22.4597 3.47788 22.4597H20.5217C21.3386 22.4597 21.9996 21.8205 21.9996 21.0333V3.96721C21.9996 3.17923 21.3378 2.54004 20.5217 2.54004ZM8.07779 19.2101H5.08508V10.2423H8.07779V19.2101ZM6.58224 9.01831H6.56296C5.55816 9.01831 4.90918 8.32953 4.90918 7.46874C4.90918 6.58876 5.57824 5.91917 6.60232 5.91917C7.62559 5.91917 8.2561 6.58876 8.27538 7.46874C8.27538 8.32953 7.62559 9.01831 6.58224 9.01831ZM18.8696 19.2101H15.8768V14.4134C15.8768 13.2078 15.4439 12.3854 14.3612 12.3854C13.5339 12.3854 13.0416 12.9398 12.8255 13.4758C12.7468 13.667 12.7267 13.9358 12.7267 14.203V19.2109H9.73399C9.73399 19.2109 9.77334 11.0847 9.73399 10.2431H12.7267V11.5127C13.1243 10.9015 13.8367 10.0327 15.4238 10.0327C17.3925 10.0327 18.8687 11.3143 18.8687 14.0686V19.2101H18.8696Z"
                fill="#A1A7AA"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
            >
              <path
                d="M19.2002 3.7002H4.8002C3.9162 3.7002 3.2002 4.4162 3.2002 5.3002V19.7002C3.2002 20.5842 3.9162 21.3002 4.8002 21.3002H19.2002C20.0842 21.3002 20.8002 20.5842 20.8002 19.7002V5.3002C20.8002 4.4162 20.0834 3.7002 19.2002 3.7002ZM18.1514 11.2794C18.0474 11.289 17.9426 11.2954 17.837 11.2954C16.641 11.2954 15.5898 10.681 14.9778 9.7506C14.9778 12.1898 14.9778 14.9658 14.9778 15.0122C14.9778 17.1602 13.2362 18.901 11.089 18.901C8.9418 18.9002 7.2002 17.1586 7.2002 15.0114C7.2002 12.8634 8.9418 11.1226 11.089 11.1226C11.1706 11.1226 11.2498 11.1298 11.329 11.1346V13.0514C11.249 13.0418 11.1714 13.0274 11.089 13.0274C9.993 13.0274 9.1042 13.9162 9.1042 15.0122C9.1042 16.1082 9.9922 16.997 11.089 16.997C12.1858 16.997 13.1538 16.133 13.1538 15.037C13.1538 14.993 13.173 6.101 13.173 6.101H15.0042C15.1762 7.7386 16.4986 9.0314 18.1514 9.1498V11.2794Z"
                fill="#A1A7AA"
              />
            </svg>
          </div>
        </div>
        <p className="lg:w-[95%] text-[#EBECED]">
          NIMBI .com platform (“Platform”) is offered for your engagement. By
          interacting with the Platform, you consent to abide by our Terms of
          Service, Privacy Policy, Cookie Policy, and Token purchase terms.
          Cryptocurrency regulations vary across jurisdictions, and the value of
          digital currencies can both increase and decrease. Any earnings from
          cryptocurrencies may be subject to taxation as per your local laws.
          Content on this website is not designed as investment counsel, and you
          should determine the suitability of any financial activity based on
          your fiscal circumstances and risk threshold. Consultation with
          licensed entities in legal, tax, insurance, or financial planning
          sectors is recommended for personalized guidance. NIMBI.com makes no
          commitments regarding specific financial results or the preservation
          of capital for any cryptocurrency referenced herein. By using this
          site, you agree to the stipulations of our Token sale. Investing in
          cryptocurrencies carries inherent risks, potentially leading to
          partial or complete loss of funds.
        </p>
        <div className="lg:hidden flex items-center gap-5">
          <span className="tetx-sm text-[#A1A7AA] font-medium">Follow us</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
          >
            <path
              d="M14.4976 12.5422C14.4976 13.9102 13.3888 15.0189 12.0209 15.0189C10.6529 15.0189 9.54492 13.9102 9.54492 12.5422C9.54492 11.1742 10.6537 10.0654 12.0209 10.0654C13.388 10.0654 14.4976 11.1742 14.4976 12.5422Z"
              fill="url(#paint0_radial_3134_1031)"
            />
            <path
              d="M18.0696 9.53991C18.0368 8.81513 17.916 8.42153 17.8144 8.15994C17.6792 7.81275 17.5192 7.56555 17.2584 7.30556C16.9984 7.04556 16.7505 6.88396 16.4041 6.74957C16.1417 6.64877 15.7489 6.52717 15.0241 6.49437C14.2401 6.45837 14.0049 6.45117 12.0217 6.45117C10.0386 6.45117 9.80339 6.45837 9.0202 6.49437C8.29622 6.52717 7.90183 6.64797 7.64023 6.74957C7.29304 6.88396 7.04584 7.04476 6.78585 7.30556C6.52585 7.56555 6.36506 7.81355 6.22986 8.15994C6.12906 8.42233 6.00746 8.81513 5.97386 9.53991C5.93866 10.3239 5.93066 10.5583 5.93066 12.5423C5.93066 14.5262 5.93786 14.7614 5.97386 15.5446C6.00666 16.2694 6.12746 16.663 6.22986 16.9246C6.36426 17.2718 6.52505 17.519 6.78585 17.779C7.04584 18.0389 7.29384 18.1997 7.64023 18.3349C7.90183 18.4373 8.29542 18.5573 9.0202 18.5909C9.80339 18.6269 10.0378 18.6341 12.0217 18.6341C14.0057 18.6341 14.2409 18.6269 15.0241 18.5909C15.7489 18.5581 16.1425 18.4373 16.4041 18.3349C16.7513 18.1997 16.9984 18.0389 17.2584 17.779C17.5184 17.519 17.6792 17.2718 17.8144 16.9246C17.916 16.663 18.0368 16.2694 18.0696 15.5446C18.1056 14.7606 18.1128 14.5262 18.1128 12.5423C18.1128 10.5583 18.1056 10.3239 18.0696 9.53991ZM12.0209 16.3574C9.91379 16.3574 8.20582 14.6494 8.20582 12.5423C8.20582 10.4351 9.91379 8.72713 12.0209 8.72713C14.1281 8.72713 15.8361 10.4351 15.8361 12.5423C15.8361 14.6494 14.1281 16.3574 12.0209 16.3574ZM15.9865 9.46791C15.4945 9.46791 15.0953 9.06872 15.0953 8.57593C15.0961 8.08394 15.4945 7.68475 15.9873 7.68475C16.4801 7.68475 16.8785 8.08474 16.8785 8.57673C16.8785 9.06952 16.4793 9.46791 15.9865 9.46791Z"
              fill="url(#paint1_radial_3134_1031)"
            />
            <path
              d="M21.9292 7.5711C21.8748 6.38152 21.6772 5.73594 21.5092 5.30555C21.2876 4.73596 21.0244 4.32956 20.5964 3.90317C20.1692 3.47598 19.7629 3.21119 19.1941 2.99039C18.7629 2.82399 18.1181 2.6248 16.9285 2.5704C15.6421 2.5128 15.2565 2.5 11.9998 2.5C8.74387 2.5 8.35748 2.512 7.0711 2.5704C5.88152 2.6248 5.23594 2.82239 4.80555 2.99039C4.23516 3.21119 3.82956 3.47598 3.40237 3.90317C2.97598 4.33116 2.71199 4.73676 2.49039 5.30635C2.32399 5.73674 2.1248 6.38232 2.0704 7.5711C2.0128 8.85828 2 9.24307 2 12.5006C2 15.7581 2.012 16.1437 2.0712 17.4293C2.1256 18.6189 2.32319 19.2645 2.49119 19.6949C2.71199 20.2645 2.97598 20.67 3.40317 21.0972C3.83036 21.5244 4.23676 21.7876 4.80635 22.01C5.23594 22.1772 5.88232 22.3756 7.0719 22.43C8.35748 22.4892 8.74387 22.5004 11.9998 22.5004C15.2573 22.5004 15.6437 22.4884 16.9293 22.43C18.1189 22.3756 18.7645 22.178 19.1949 22.01C19.7645 21.7884 20.1708 21.5244 20.5972 21.0972C21.0244 20.6708 21.2876 20.2645 21.51 19.6949C21.6764 19.2653 21.8756 18.6189 21.93 17.4293C21.9892 16.1421 22.0004 15.7565 22.0004 12.4998C21.9996 9.24307 21.9876 8.85748 21.9292 7.5711ZM19.4053 15.6053C19.3701 16.3965 19.2437 16.9365 19.0605 17.4085C18.8701 17.8973 18.6173 18.3117 18.2037 18.7245C17.7901 19.1373 17.3757 19.3917 16.8877 19.5813C16.4157 19.7653 15.8749 19.8901 15.0845 19.9261C14.2926 19.9629 14.039 19.9709 12.0214 19.9709C10.0038 19.9709 9.75105 19.9621 8.95826 19.9261C8.16708 19.8901 7.62789 19.7645 7.1551 19.5813C6.66551 19.3909 6.25192 19.1373 5.83913 18.7245C5.42553 18.3117 5.17194 17.8965 4.98234 17.4085C4.79835 16.9365 4.67355 16.3965 4.63755 15.6053C4.60075 14.8134 4.59275 14.5598 4.59275 12.5422C4.59275 10.5246 4.60075 10.271 4.63755 9.47906C4.67195 8.68868 4.79675 8.14789 4.98074 7.6759C5.17034 7.18711 5.42393 6.77272 5.83753 6.35992C6.25112 5.94713 6.66551 5.69274 7.1535 5.50314C7.62549 5.31914 8.16628 5.19435 8.95666 5.15835C9.74945 5.12155 10.003 5.11355 12.0206 5.11355C14.0382 5.11355 14.291 5.12235 15.0837 5.15835C15.8741 5.19355 16.4141 5.31994 16.8869 5.50314C17.3749 5.69274 17.7893 5.94633 18.2021 6.35992C18.6149 6.77352 18.8693 7.18711 19.0589 7.6759C19.2429 8.14789 19.3677 8.68868 19.4037 9.47906C19.4397 10.271 19.4485 10.5246 19.4485 12.5422C19.4485 14.5598 19.4413 14.8126 19.4053 15.6053Z"
              fill="url(#paint2_radial_3134_1031)"
            />
            <path
              d="M14.4976 12.5422C14.4976 13.9102 13.3888 15.0189 12.0209 15.0189C10.6529 15.0189 9.54492 13.9102 9.54492 12.5422C9.54492 11.1742 10.6537 10.0654 12.0209 10.0654C13.388 10.0654 14.4976 11.1742 14.4976 12.5422Z"
              fill="#A1A7AA"
            />
            <path
              d="M18.0696 9.53991C18.0368 8.81513 17.916 8.42153 17.8144 8.15994C17.6792 7.81275 17.5192 7.56555 17.2584 7.30556C16.9984 7.04556 16.7505 6.88396 16.4041 6.74957C16.1417 6.64877 15.7489 6.52717 15.0241 6.49437C14.2401 6.45837 14.0049 6.45117 12.0217 6.45117C10.0386 6.45117 9.80339 6.45837 9.0202 6.49437C8.29622 6.52717 7.90183 6.64797 7.64023 6.74957C7.29304 6.88396 7.04584 7.04476 6.78585 7.30556C6.52585 7.56555 6.36506 7.81355 6.22986 8.15994C6.12906 8.42233 6.00746 8.81513 5.97386 9.53991C5.93866 10.3239 5.93066 10.5583 5.93066 12.5423C5.93066 14.5262 5.93786 14.7614 5.97386 15.5446C6.00666 16.2694 6.12746 16.663 6.22986 16.9246C6.36426 17.2718 6.52505 17.519 6.78585 17.779C7.04584 18.0389 7.29384 18.1997 7.64023 18.3349C7.90183 18.4373 8.29542 18.5573 9.0202 18.5909C9.80339 18.6269 10.0378 18.6341 12.0217 18.6341C14.0057 18.6341 14.2409 18.6269 15.0241 18.5909C15.7489 18.5581 16.1425 18.4373 16.4041 18.3349C16.7513 18.1997 16.9984 18.0389 17.2584 17.779C17.5184 17.519 17.6792 17.2718 17.8144 16.9246C17.916 16.663 18.0368 16.2694 18.0696 15.5446C18.1056 14.7606 18.1128 14.5262 18.1128 12.5423C18.1128 10.5583 18.1056 10.3239 18.0696 9.53991ZM12.0209 16.3574C9.91379 16.3574 8.20582 14.6494 8.20582 12.5423C8.20582 10.4351 9.91379 8.72713 12.0209 8.72713C14.1281 8.72713 15.8361 10.4351 15.8361 12.5423C15.8361 14.6494 14.1281 16.3574 12.0209 16.3574ZM15.9865 9.46791C15.4945 9.46791 15.0953 9.06872 15.0953 8.57593C15.0961 8.08394 15.4945 7.68475 15.9873 7.68475C16.4801 7.68475 16.8785 8.08474 16.8785 8.57673C16.8785 9.06952 16.4793 9.46791 15.9865 9.46791Z"
              fill="#A1A7AA"
            />
            <path
              d="M21.9292 7.5711C21.8748 6.38152 21.6772 5.73594 21.5092 5.30555C21.2876 4.73596 21.0244 4.32956 20.5964 3.90317C20.1692 3.47598 19.7629 3.21119 19.1941 2.99039C18.7629 2.82399 18.1181 2.6248 16.9285 2.5704C15.6421 2.5128 15.2565 2.5 11.9998 2.5C8.74387 2.5 8.35748 2.512 7.0711 2.5704C5.88152 2.6248 5.23594 2.82239 4.80555 2.99039C4.23516 3.21119 3.82956 3.47598 3.40237 3.90317C2.97598 4.33116 2.71199 4.73676 2.49039 5.30635C2.32399 5.73674 2.1248 6.38232 2.0704 7.5711C2.0128 8.85828 2 9.24307 2 12.5006C2 15.7581 2.012 16.1437 2.0712 17.4293C2.1256 18.6189 2.32319 19.2645 2.49119 19.6949C2.71199 20.2645 2.97598 20.67 3.40317 21.0972C3.83036 21.5244 4.23676 21.7876 4.80635 22.01C5.23594 22.1772 5.88232 22.3756 7.0719 22.43C8.35748 22.4892 8.74387 22.5004 11.9998 22.5004C15.2573 22.5004 15.6437 22.4884 16.9293 22.43C18.1189 22.3756 18.7645 22.178 19.1949 22.01C19.7645 21.7884 20.1708 21.5244 20.5972 21.0972C21.0244 20.6708 21.2876 20.2645 21.51 19.6949C21.6764 19.2653 21.8756 18.6189 21.93 17.4293C21.9892 16.1421 22.0004 15.7565 22.0004 12.4998C21.9996 9.24307 21.9876 8.85748 21.9292 7.5711ZM19.4053 15.6053C19.3701 16.3965 19.2437 16.9365 19.0605 17.4085C18.8701 17.8973 18.6173 18.3117 18.2037 18.7245C17.7901 19.1373 17.3757 19.3917 16.8877 19.5813C16.4157 19.7653 15.8749 19.8901 15.0845 19.9261C14.2926 19.9629 14.039 19.9709 12.0214 19.9709C10.0038 19.9709 9.75105 19.9621 8.95826 19.9261C8.16708 19.8901 7.62789 19.7645 7.1551 19.5813C6.66551 19.3909 6.25192 19.1373 5.83913 18.7245C5.42553 18.3117 5.17194 17.8965 4.98234 17.4085C4.79835 16.9365 4.67355 16.3965 4.63755 15.6053C4.60075 14.8134 4.59275 14.5598 4.59275 12.5422C4.59275 10.5246 4.60075 10.271 4.63755 9.47906C4.67195 8.68868 4.79675 8.14789 4.98074 7.6759C5.17034 7.18711 5.42393 6.77272 5.83753 6.35992C6.25112 5.94713 6.66551 5.69274 7.1535 5.50314C7.62549 5.31914 8.16628 5.19435 8.95666 5.15835C9.74945 5.12155 10.003 5.11355 12.0206 5.11355C14.0382 5.11355 14.291 5.12235 15.0837 5.15835C15.8741 5.19355 16.4141 5.31994 16.8869 5.50314C17.3749 5.69274 17.7893 5.94633 18.2021 6.35992C18.6149 6.77352 18.8693 7.18711 19.0589 7.6759C19.2429 8.14789 19.3677 8.68868 19.4037 9.47906C19.4397 10.271 19.4485 10.5246 19.4485 12.5422C19.4485 14.5598 19.4413 14.8126 19.4053 15.6053Z"
              fill="#A1A7AA"
            />
            <defs>
              <radialGradient
                id="paint0_radial_3134_1031"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(9.86516 10.1741) scale(6.28897)"
              >
                <stop offset="0.09" stop-color="#FA8F21" />
                <stop offset="0.78" stop-color="#D82D7E" />
              </radialGradient>
              <radialGradient
                id="paint1_radial_3134_1031"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(6.71869 6.7179) scale(15.4672)"
              >
                <stop offset="0.09" stop-color="#FA8F21" />
                <stop offset="0.78" stop-color="#D82D7E" />
              </radialGradient>
              <radialGradient
                id="paint2_radial_3134_1031"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(3.29435 2.93813) scale(25.3921)"
              >
                <stop offset="0.09" stop-color="#FA8F21" />
                <stop offset="0.78" stop-color="#D82D7E" />
              </radialGradient>
            </defs>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="21"
            viewBox="0 0 21 21"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M10.3343 20.4951C10.2957 20.4967 10.2572 20.4967 10.2202 20.4982C10.2587 20.4967 10.2973 20.4967 10.3343 20.4951Z"
              fill="#A1A7AA"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M9.98145 20.4996C9.99686 20.4996 10.0138 20.4996 10.0292 20.4996C10.0801 20.4996 10.1294 20.4996 10.1803 20.498C10.1294 20.498 10.0801 20.4996 10.0292 20.4996C10.0138 20.4996 9.99686 20.4996 9.98145 20.4996Z"
              fill="#A1A7AA"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M10.0295 0.5C4.48993 0.5 0 4.97663 0 10.4998C0 15.897 4.28801 20.2937 9.65189 20.4935C9.10933 20.4735 8.57757 20.4105 8.05968 20.3075V12.6928H6.42277V9.97423H8.05814V8.34217C8.05814 6.1246 8.9814 4.80605 11.6063 4.80605H13.7904V7.52461H12.4248C11.4029 7.52461 11.335 7.90419 11.335 8.61418L11.3319 9.97423H13.8058L13.516 12.6928H11.3319V20.4166C11.0622 20.452 10.7925 20.475 10.5212 20.4889C15.8311 20.2322 20.0575 15.8585 20.0575 10.5013C20.059 4.97663 15.5691 0.5 10.0295 0.5Z"
              fill="#A1A7AA"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M9.81396 20.498C9.84325 20.498 9.87254 20.4996 9.90182 20.4996C9.87254 20.498 9.84325 20.498 9.81396 20.498Z"
              fill="#A1A7AA"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M9.66309 20.4932C9.70008 20.4947 9.73861 20.4962 9.7756 20.4962C9.73861 20.4947 9.70162 20.4947 9.66309 20.4932Z"
              fill="#A1A7AA"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M10.5101 20.4893C10.4655 20.4908 10.4192 20.4939 10.3745 20.4954C10.4192 20.4923 10.4639 20.4908 10.5101 20.4893Z"
              fill="#A1A7AA"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
          >
            <path
              d="M13.9027 10.9686L21.3482 2.5H19.5838L13.119 9.8532L7.95547 2.5H2L9.8082 13.6193L2 22.5H3.76443L10.5915 14.7348L16.0445 22.5H22L13.9023 10.9686H13.9027ZM11.4861 13.7173L10.695 12.6101L4.40018 3.79968H7.11025L12.1902 10.9099L12.9813 12.0172L19.5847 21.2594H16.8746L11.4861 13.7177V13.7173Z"
              fill="#A1A7AA"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="21"
            viewBox="0 0 20 21"
            fill="none"
          >
            <g clip-path="url(#clip0_3134_1444)">
              <path
                d="M10.4423 17.1486L6.33952 17.0761C5.01068 17.051 3.67885 17.1012 2.37709 16.8403C0.39538 16.4498 0.254975 14.5372 0.108553 12.9329C-0.0940309 10.6771 -0.0158052 8.38083 0.366296 6.14443C0.581918 4.889 1.43036 4.14096 2.74215 4.05881C7.17192 3.76307 11.6308 3.79786 16.0505 3.93607C16.5169 3.94863 16.9872 4.01822 17.4475 4.0965C19.7191 4.48019 19.7752 6.64796 19.9227 8.47264C20.0691 10.3157 20.0079 12.1684 19.7271 13.9998C19.5015 15.5153 19.0712 16.7871 17.252 16.9099C14.9734 17.0703 12.747 17.1998 10.4624 17.1582C10.4624 17.1486 10.4484 17.1486 10.4423 17.1486ZM8.03039 13.3108C9.74734 12.3607 11.4322 11.4261 13.1391 10.4829C11.4192 9.53285 9.73731 8.59828 8.03039 7.65501V13.3108Z"
                fill="#A1A7AA"
              />
            </g>
            <defs>
              <clipPath id="clip0_3134_1444">
                <rect
                  width="19.9996"
                  height="19.9996"
                  fill="white"
                  transform="translate(0 0.5)"
                />
              </clipPath>
            </defs>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
          >
            <path
              d="M20.5217 2.54004H3.47788C2.66183 2.54004 2 3.17923 2 3.96721V21.0333C2 21.8213 2.66183 22.4597 3.47788 22.4597H20.5217C21.3386 22.4597 21.9996 21.8205 21.9996 21.0333V3.96721C21.9996 3.17923 21.3378 2.54004 20.5217 2.54004ZM8.07779 19.2101H5.08508V10.2423H8.07779V19.2101ZM6.58224 9.01831H6.56296C5.55816 9.01831 4.90918 8.32953 4.90918 7.46874C4.90918 6.58876 5.57824 5.91917 6.60232 5.91917C7.62559 5.91917 8.2561 6.58876 8.27538 7.46874C8.27538 8.32953 7.62559 9.01831 6.58224 9.01831ZM18.8696 19.2101H15.8768V14.4134C15.8768 13.2078 15.4439 12.3854 14.3612 12.3854C13.5339 12.3854 13.0416 12.9398 12.8255 13.4758C12.7468 13.667 12.7267 13.9358 12.7267 14.203V19.2109H9.73399C9.73399 19.2109 9.77334 11.0847 9.73399 10.2431H12.7267V11.5127C13.1243 10.9015 13.8367 10.0327 15.4238 10.0327C17.3925 10.0327 18.8687 11.3143 18.8687 14.0686V19.2101H18.8696Z"
              fill="#A1A7AA"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
          >
            <path
              d="M19.2002 3.7002H4.8002C3.9162 3.7002 3.2002 4.4162 3.2002 5.3002V19.7002C3.2002 20.5842 3.9162 21.3002 4.8002 21.3002H19.2002C20.0842 21.3002 20.8002 20.5842 20.8002 19.7002V5.3002C20.8002 4.4162 20.0834 3.7002 19.2002 3.7002ZM18.1514 11.2794C18.0474 11.289 17.9426 11.2954 17.837 11.2954C16.641 11.2954 15.5898 10.681 14.9778 9.7506C14.9778 12.1898 14.9778 14.9658 14.9778 15.0122C14.9778 17.1602 13.2362 18.901 11.089 18.901C8.9418 18.9002 7.2002 17.1586 7.2002 15.0114C7.2002 12.8634 8.9418 11.1226 11.089 11.1226C11.1706 11.1226 11.2498 11.1298 11.329 11.1346V13.0514C11.249 13.0418 11.1714 13.0274 11.089 13.0274C9.993 13.0274 9.1042 13.9162 9.1042 15.0122C9.1042 16.1082 9.9922 16.997 11.089 16.997C12.1858 16.997 13.1538 16.133 13.1538 15.037C13.1538 14.993 13.173 6.101 13.173 6.101H15.0042C15.1762 7.7386 16.4986 9.0314 18.1514 9.1498V11.2794Z"
              fill="#A1A7AA"
            />
          </svg>
        </div>
        <p className="text-xs">
          Copyright © 2024 NIMBI.COM | All rights reserved.
        </p>
      </div>
    </footer>
  );
};
