import React,{useState} from "react";
import PlayIcon from "./play.png"
const VideoURL = (props) => {
  const { name, value, attribute, onChange } = props;
  console.log(value,)

  const { placeholder, label, hint } = attribute.customFieldConfig || {};
  return (
    <>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
        <form>
        <input
          id="URL"
          placeholder="video url"
          value={value}
          style={{
            width: '250px',
            height: '40px',
            borderRadius:"4px",
            outline:"none",
            border: '1px solid rgb(74, 74, 106)',
            background:"transparent",
            fontSize: '15px',
            color:"white"
          }}
          onChange={(e) => {
            let args={
             target:{ name,
              value:e.target.value
             }
            }
            onChange(args)
          }}
        />
        </form>
        <div
          style={{
            width: '250px',
            aspectRatio: '1',
            border:" 1px solid rgb(74, 74, 106)",
            borderRadius:"4px",
            position: 'relative',
            background:"transparent",
            display:"flex",

          }}
        >
         <img  style={{ position: 'absolute', top: '45%', left: '44%',
         display:value?.trim()?.length>0?"none":"block"
          }}

         src={PlayIcon}/>
          <video
            controls={value?.trim()?.length > 0 ? true : false}
            src={value}
            style={{
              width: '250px',
              position: 'absolute',
              top: '0',
              aspectRatio: '1',
            }}
          />
        </div>
      </div>

    </>
  );
};

export default VideoURL;
