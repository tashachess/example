export const template  = `
    <div class="{{ className }}">
        <span onclick="{{handleClick}}">{{ text }}</span>
        <span>{{ user.info.firstName }}</span>
    </div>
  `;
