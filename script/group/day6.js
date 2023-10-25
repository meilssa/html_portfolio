let activeBox = null

const boxes = document.querySelectorAll('img')
const boxes_arr = Array.from(boxes)
const memberInfo = document.querySelector('#member-box')
const memberDetails = document.querySelector('#member-details')
const closeBtn = document.querySelector('.close-btn')

const memberData =[{
    name: '박성진',
    birthdate: '1993년 1월 16일(30세)',
    birthplace: '대한민국 부산광역시 사하구',
    education: '서울종합예술실용학교 실용음악예술학부',
    position: '리더',
    sigh : 'img/DAY6_mem/sungjinsigh.jpg'
},{
    name: '강영현',
    birthdate: '1993년 12월 19일(29세)',
    birthplace: '대한민국 서울특별시',
    education: '동국대학교 경영학과 졸업',
    position: '보컬',
    sigh : 'img/DAY6_mem/young_ksigh.jpg'
},{
    name: '김원필',
    birthdate: '1994년 4월 28일(29세)',
    birthplace: '대한민국 인천광역시 부평구',
    education: '대경대학교 모델학과',
    position: '드럼',
    sigh : 'img/DAY6_mem/onepillsigh.jpg'
},{
    name: '윤도운',
    birthdate: '1995년 8월 25일(28세)',
    birthplace: '대한민국 부산광역시',
    education: '부산예술대학교 실용음악학과',
    position: '드럼',
    sigh : 'img/DAY6_mem/dounsigh.jpg'
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
    
