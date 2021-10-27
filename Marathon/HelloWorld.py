import execjs
file = 'jsCode.js'
ctx = execjs.compile(open(file, encoding="utf-8").read())
params = ctx.call('generatorMarathonSign',"appid=5PFuGr3Q7AA0vbJAFior&channel=windows-PC&device_id=Z8T23iCPme3DWGRAQLpJO2w0qY2Kq9-R&language=zh-CN&model=&noncesr=1635235066721&sys_version=&ts=1635235066&version=V1.0","xbbaUe8PPVblLWaVP-iIJnUGhnDXmrm_")
print(params)