let activeBox = null

const boxes = document.querySelectorAll('img')
const boxes_arr = Array.from(boxes)
const memberInfo = document.querySelector('#member-box')
const memberDetails = document.querySelector('#member-details')
const closeBtn = document.querySelector('.close-btn')

const memberData =[{
    name: '박지효',
    birthdate: '1997년 02월 01일(26세)',
    birthplace: '대한민국 경기도 구리시 수택동',
    education: '청담고등학교',
    position: '리더',
    sigh : 'img/TWICE_MEM/JIHYOsigh.jpg'
    
},{
    name: '손채영',
    birthdate: '1999년 4월 23일(24세)',
    birthplace: '대한민국 서울특별시 강동구 동촌동',
    education: '한림연예예술고등학교 실용음악과',
    position: '메인래퍼',
    sigh : 'img/TWICE_MEM/CHAEYOUNGsigh.jpg'
    
},{
    name: '김다현',
    birthdate: '1998년 5월 28일(25세)',
    birthplace: '대한민국 경기도 성남시 중원구 은행동',
    education: '한림연예예술고등학교 실용음악과',
    position: '서브보컬',
    sigh : 'img/TWICE_MEM/DAHYUNsigh.jpg'
    
},{
    name: '유정현',
    birthdate: '1996년 11월 1일(26세)',
    birthplace: '대한민국 경기도 수원시 장안구 정자동',
    education: '압구정고등학교',
    position: '리드보컬',
    sigh : 'img/TWICE_MEM/JEONGYEONsigh.jpg'
    
},{
    name: '名井南(묘이 미나)',
    birthdate: '1997년 03월 24일(26세)',
    birthplace: '일본 효고현 니시노미야시',
    education: '니시노미야현립코후고등학교',
    position: '메인댄서',
    sigh : 'img/TWICE_MEM/MINAsigh.jpg'
},{
    name: '平井もも(히라이 모모)',
    birthdate: '1996년 11월 09일(26세)',
    birthplace: '일본 교토부 교타나베시',
    education: '일본 고등학교졸업정도인정시험(검정고시)',
    position: '메인댄서',
    sigh : 'img/TWICE_MEM/MOMOsigh.jpg'
    
},{
    name: '임나연',
    birthdate: '1995년 09월 22일(27세)',
    birthplace: '대한민국 서울특별시 강동구 명일동',
    education: '건국대학교 영상영화학',
    position: '리드댄서',
    sigh : 'img/TWICE_MEM/NAYEONsigh.jpg'
    
},{
    name: '湊﨑紗夏(미나토자키 사나)',
    birthdate: '1996년 12월 29일(26세)',
    birthplace: '일본 오사카부 오사카시 덴노지구',
    education: '일본 고등학교졸업정도인정시험(검정고시)',
    position: '서브보컬',
    sigh : 'img/TWICE_MEM/SANAsigh.jpg'
    
},{
    name: '周子瑜(저우쯔위)',
    birthdate: '1999년 6월 14일(24세)',
    birthplace: '대만 타이완성 타이난시',
    education: '한림연예예술고등학교',
    position: '리드댄서',
    sigh : 'img/TWICE_MEM/TZUYUsigh.jpg'
    
    
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