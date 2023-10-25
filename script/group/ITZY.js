let activeBox = null

const boxes = document.querySelectorAll('img')
const boxes_arr = Array.from(boxes)
const memberInfo = document.querySelector('#member-box')
const memberDetails = document.querySelector('#member-details')
const closeBtn = document.querySelector('.close-btn')

const memberData =[{
    name: '황예지',
    birthdate: '2000년 5월 26일(23세)',
    birthplace: '대한민국 전라북도 전주시 완산구',
    education: '전주상업정보고등학교 금융정보과',
    position: '리더',
    sigh : 'img/itzy_mem/yejisigh.jpg'
    
},{
    name: '신류진',
    birthdate: '2001년 04월 17일(22세)',
    birthplace: '대한민국 강원도 춘천시',
    education: '한림예술고등학교 실용무용과',
    position: '메인래퍼',
    sigh : 'img/itzy_mem/ryujinsigh.jpg'
    
},{
    name: '신유나',
    birthdate: '2003년 12월 09일(19세)',
    birthplace: '대한민국 강원도 원주시',
    education: '한림예술고등학교 실요무용과',
    position: '리드래퍼',
    sigh : 'img/itzy_mem/yunasigh.jpg'
    
},{
    name: '이채령',
    birthdate: '2001년 06월 05일',
    birthplace: '대한민국 충청남도 논산시',
    education: '한림예술고등학교 뮤지컬과',
    position: '메인댄서',
    sigh : 'img/itzy_mem/Chaeryeongsigh.jpg'
    
},{
    name: '최지수',
    birthdate: '2000년 7월 21일(23세)',
    birthplace: '대한민국 인천광역시 연수구 송도동',
    education: '서울공연예술고등학교 실용음악과',
    position: '메인보컬',
    sigh : 'img/itzy_mem/liasigh.jpg'
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