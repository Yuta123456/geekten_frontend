import { useRef, useState, useEffect } from "react";

export default function Home() {
  const audioContext = useRef(null);
  const [audioBuffer, setAudioBuffer] = useState(null);
  useEffect(() => {
    audioContext.current = new AudioContext(); // 再レンダリング時に新しくなるらしいので、useRefでDOM参照して一回のみAudioContextを生成
  }, []);

  const handleChangeFile = async (event) => {
    const _file = event.target.files[0];
    const _audioBuffer = await audioContext.current.decodeAudioData(
      await _file.arrayBuffer()
    );
    setAudioBuffer(_audioBuffer);
  };
  const handleClickPlay = () => {
    // 自動再生ブロックにより停止されたオーディオを再開させる
    if (audioContext.current.state === "suspended") {
      audioContext.current.resume();
    }

    // ソースノード生成 ＋ 音声を設定
    const sourceNode = audioContext.current.createBufferSource();
    sourceNode.buffer = audioBuffer;

    sourceNode.connect(audioContext.current.destination); // 出力先に接続
    sourceNode.start();
  };

  return (
    <div>
      <input type="file" onChange={handleChangeFile} />
      <button onClick={handleClickPlay}>再生</button>
    </div>
  );
}
