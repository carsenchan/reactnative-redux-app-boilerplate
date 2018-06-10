const fakeData = [
    {id: '00001', name: 'book1'},
    {id: '00002', name: 'book2'},
    {id: '00003', name: 'book3'}
]

export default apiCall = ()=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(fakeData)
        },300)
    })
}