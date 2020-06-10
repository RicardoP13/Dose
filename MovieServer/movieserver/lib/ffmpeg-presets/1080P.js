exports.load = function(ffmpeg) {
  ffmpeg
  //.withVideoCodec('h264_nvenc')
  .withVideoBitrate(8000)
  .withAudioCodec('libmp3lame')
  .withVideoCodec('h264_nvenc')
  .outputOption([
    '-map 0',
    '-map -v',
    '-map 0:V',
    '-deadline realtime',
    '-lag-in-frames 0',
    '-static-thresh 0',
    '-frame-parallel 1',
    '-crf 4',
    '-movflags frag_keyframe+faststart',
    '-pix_fmt yuv420p',
    '-sn',
    '-max_muxing_queue_size 9999'
  ])
  .outputFormat('mp4')
};