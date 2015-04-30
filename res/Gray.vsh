attribute vec4a_position;
attribute vec2a_texCoord;
attribute vec4a_color;
varyingvec4 v_fragmentColor;
varyingvec2 v_texCoord;
voidmain()
{
  gl_Position = CC_PMatrix * a_position;
  v_fragmentColor = a_color;
  v_texCoord = a_texCoord;
}