export default {
      getList(sort){
            let writeList = new Array();
            if(localStorage.length>0){
                  for (let i = 0; i < localStorage.length; i++) {
                        let key = localStorage.key(i);
                        console.log(key);
                        if(key.indexOf("-w")!=-1){
                              let listItem = JSON.parse(localStorage.getItem(key))
                              writeList.push(listItem)
                        }
                  }
            }
            console.log(sort)
            if(sort=="asc"){
                  return writeList.sort(function(a,b){
                        return a.writeDate-b.writeDate;
                  });
            }else{
                  return writeList.sort(function(a,b){
                        return b.writeDate-a.writeDate;
                  });
            }
      },
      updateList(key,val){
            const _key = key+"-w"
            let content = JSON.parse(localStorage.getItem(_key))
            content.isComplete = val
            localStorage.setItem(_key, JSON.stringify(content))
      },

      deleteList(key){
            localStorage.removeItem(key+"-w");
      },

      deleteAllList(){
            localStorage.clear();
      }
}