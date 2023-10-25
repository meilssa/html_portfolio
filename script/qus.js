const scriptToken = 'AKfycbxnVrGZgR9v7gWWYSeBTU4BWQx6jcQ1qux0CY_Q_177vkDVY4s-_VzKWUzH0vmE_ai1'
const scriptUrl = 'https://script.google.com/macros/s/' + scriptToken + '/exec'

function submitToGoogleScript(name, recipient, subject, message){
    fetch(scriptUrl,{
        method: 'POST',
        body: new URLSearchParams({
            name: name,
            recipient: recipient,
            subject: subject,
            message: message
        }),
        headers:{
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    })
    .then(response =>{
        if (response.ok){
            console.log('Google Forms로 데이터 전송 성공')
            const emailItem = document.createElement('li')
            emailItem.innerHTML = `
                <strong>이름:</strong> ${name}<br>
                <strong>이메일:</strong> ${recipient}<br>
                <strong>제목:</strong> ${subject}<br>
                <strong>문의 내용:</strong> ${message}
            `;
            const emailList = document.getElementById('email-list')
            emailList.appendChild(emailItem)
            document.getElementById('name').value = ''
            document.getElementById('recipient').value = ''
            document.getElementById('subject').value = ''
            document.getElementById('message').value = ''
        } else{
            console.error('Google Forms로 데이터 전송 실패')
        }
    })
    .catch(error =>{
        console.error('Google Forms로 데이터 전송 중 오류 발생:', error)
    })
}

document.addEventListener('DOMContentLoaded', () =>{
    const emailForm = document.getElementById('email-form')

    emailForm.addEventListener('submit', (e) =>{
        e.preventDefault()

        const name = document.getElementById('name').value;
        const recipient = document.getElementById('recipient').value
        const subject = document.getElementById('subject').value
        const message = document.getElementById('message').value

        if (name && recipient && subject && message) {
            submitToGoogleScript(name, recipient, subject, message)
        }
    })
})
