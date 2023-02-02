window.addEventListener("load",function(){
  const priority1 = document.getElementById('priority_1');
  const priority2 = document.getElementById('priority_2');
  const priority3 = document.getElementById('priority_3');
  const priorityReason1 = document.getElementById('priority_1_reason');
  const priorityReason2 = document.getElementById('priority_2_reason');
  const priorityReason3 = document.getElementById('priority_3_reason');
  const etc1 = document.getElementById('etc_1');
  const etc2 = document.getElementById('etc_2');
  const etc3 = document.getElementById('etc_3');
  if(etc1.selected){
    console.log('その他1');
    priorityReason1.classList.remove('unvisible');
  }
  if(etc2.selected){
    console.log('その他1');
    priorityReason2.classList.remove('unvisible');
  }
  if(etc3.selected){
    console.log('その他1');
    priorityReason3.classList.remove('unvisible');
  }

  priority1.addEventListener('change', () => {
    if(etc1.selected){
      console.log('その他1');
      priorityReason1.classList.remove('unvisible');
    }else{
      priorityReason1.classList.add('unvisible');
    }
  })

  priority2.addEventListener('change', () => {
    if(etc2.selected){
      console.log('その他2');
      priorityReason2.classList.remove('unvisible');
    }else{
      priorityReason2.classList.add('unvisible');
    }
  })

  priority3.addEventListener('change', () => {
    if(etc3.selected){
      console.log('その他3');
      priorityReason3.classList.remove('unvisible');
    }else{
      priorityReason3.classList.add('unvisible');
    }
  })

});