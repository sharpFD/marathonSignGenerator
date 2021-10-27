import execjs
file = 'jsCode.js'
ctx = execjs.compile(open(file, encoding="utf-8").read())
# 个人参数，按情况修改
base = 'appid=5PFuGr3Q7AA0vbJAFior&channel=windows-PC&device_id=Z8T23iCPme3DWGRAQLpJO2w0qY2Kq9-R&language=zh-CN&model=&noncesr=1635339630051&sys_version=&ts=1635339630&version=V1.0'
# 固定校验码，不要改动
extra = 'xbbaUe8PPVblLWaVP-iIJnUGhnDXmrm_'

params = ctx.call('generatorMarathonSign',base, extra)
print(params)