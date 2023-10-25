let activeBox = null

const boxes = document.querySelectorAll('img')
const boxes_arr = Array.from(boxes)
const memberInfo = document.querySelector('#member-box')
const memberDetails = document.querySelector('#member-details')
const closeBtn = document.querySelector('.close-btn')

const memberData =[{
    name: '오해원',
    birthdate: '2003년 2월 25일(20세)',
    birthplace: '대한민국 인천광역시 남동구 논현동',
    education: '둔촌고등학교',
    position: '리더',
    sigh : 'img/nmixx_mem/HAEWONsigh.jpg'
},{
    name: 'Lily Jin Park Morrow (릴리 진 박 머로우)',
    birthdate: '2002년 10월 17일(20세)',
    birthplace: '호주 빅토리아주 메리즈빌',
    education: '둔촌고등학교',
    position: '보컬',
    sigh : 'img/nmixx_mem/LILYsigh.jpg'
},{
    name: '설윤아',
    birthdate: '2004년 1월 26일(19세)',
    birthplace: '대한민국 대전광역시 중구 태평동',
    education: '한림연예예술고등학교 연예과',
    position: '댄서',
    sigh : 'img/nmixx_mem/SULLYOONsigh.jpg'
},{
    name: '배진솔',
    birthdate: '2004년 12월 28일(18세)',
    birthplace: '대한민국 부산광역시 사하구 장림동',
    education: '한림연예예술고등학교 연예과',
    position: '보컬',
    sigh : 'img/nmixx_mem/BAEsigh.jpg'
    
},{
    name: '김지우',
    birthdate: '2005년 4월 13일(18세)',
    birthplace: '대한민국 경기도 남양주시 와부읍 덕소리',
    education: '한림연예예술고등학교 연예과',
    position: '래퍼',
    sigh : 'img/nmixx_mem/JIWOOsigh.jpg'
},{
    name: '장규진',
    birthdate: '2006년 05월 26일(17세)',
    birthplace: '대한민국 경기도 성남시 분당구 운중동',
    education: '한림연예예술고등학교 연예과',
    position: '래퍼',
    sigh : 'img/nmixx_mem/kyujinsigh.jpg'
}]

boxes_arr.map((el,index)=>{
    el.addEventListener('click', () => {
        boxes_arr[index-1].classList.add('on')
        memberDetails.innerHTML = `
            <div class="txt">
                <h2>${memberData[index-1].name} <span>Member</span></h2>
                <ul>
                    <li>본명 : ${memberData[index-1].name}</li>
                    <li>생년월일 : ${memberData[index-1].birthdate}</li>
                    <li>출생지 : ${memberData[index-1].birthplace}</li>
                    <li>학력 : ${memberData[index-1].education}</li>
                    <li>포지션 : ${memberData[index-1].position}</li>
                </ul>
            </div>
            <div class="sigh_box">
                <img src="${memberData[index-1].sigh}" class="sigh">
            </div>
        `
        memberInfo.style.display = 'block'
    })
})

function closeMemberInfo() {
    memberInfo.style.display = 'none'
}  