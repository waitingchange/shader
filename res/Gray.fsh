varying vec4v_fragmentColor;
varying vec2v_texCoord;

voidmain()
{
  vec4v_orColor = v_fragmentColor * texture2D(CC_Texture0,v_texCoord);
  floatgray = dot(v_orColor.rgb,vec3(0.3,0.3,0.3));
  gl_FragColor = vec4(gray,gray,gray,v_orColor.a);
}