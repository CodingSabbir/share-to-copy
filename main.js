const shareBtn=document.getElementById('shareBtn');
shareBtn.addEventListener('click',()=>{
    if(navigator.share){
        navigator.share({
            url:'https://www.programming-hero.com/'
        }).then(()=>{
            console.log('thanks for share and click')
        }).catch((error)=>{
            console.log( ` error 404 ${error}`)
        })
    }
})