const get = (obj, path, defaultValue) => {
  const pathes = path.split('.');

  return pathes.reduce((acc, name) => {
    console.log(name, acc, acc.name)
    if (acc?.hasOwnProperty(name)) {
      return acc[name]
    }
    return defaultValue;
  }, obj)
}
const regex = /{{.*?}}/gi;
export const compile = (template, obj) => {
  const newStr = template.replaceAll(regex, ({ ...args }) => {
    const propertyName = Object.values(args).slice(2, Object.values(args).length-2).join('');
    console.log(propertyName)
    const property = get(obj, propertyName.trim());

    if (typeof property === 'function') {
      const script = document.createElement('script');

      script.innerHTML = `const ${propertyName} = ${property}`;
      document.head.appendChild(script);

      return propertyName.trim() + '()';
    }


    return property;
  })

  return newStr;
}
