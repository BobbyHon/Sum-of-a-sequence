const sequenceSum = (begin, end, step) => {
    let sum = 0
    if (begin > end) return sum
    
    while(begin <= end){
      sum+= begin
      begin+= step
    }
    return sum
  };