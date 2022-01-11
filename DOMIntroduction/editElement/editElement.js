function edit(ref, match, replace) {
    const matcher = new RegExp(match, 'g');
    let result = ref.textContent.replace(matcher, replace);
      ref.textContent = result        
  }