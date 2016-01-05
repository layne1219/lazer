import Frame from 'texture/Frame.js';
import SetTrim from 'texture/SetTrim.js';

//  json = Texture Packer JSON data
//  frameSet = FrameSet instance into which we'll import the data

export default function TexturePackerJSONArray (json, frameSet) {

    if (!json['frames'])
    {
        console.warn('Invalid JSON');
        return;
    }

    for (let i = 0; i < json.frames.length; i++)
    {
        let data = json.frames[i];
        let frame = Frame(i, data.filename, data.frame.x, data.frame.y, data.frame.w, data.frame.h);

        if (data.trimmed)
        {
            let trim = data.spriteSourceSize;

            SetTrim(frame, data.sourceSize.w, data.sourceSize.h, trim.x, trim.y, trim.w, trim.h);
        }

        frameSet.add(frame);
    }

    return frameSet;

}