<template>
    <div class="video-player-wrapper">
        <video ref="videoRef" class="plyr-video" playsinline controls crossorigin="anonymous">
            <source v-if="url" :src="url" :type="type" />
        </video>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch } from 'vue'
import Plyr from 'plyr'
import Hls from 'hls.js'

interface Props {
    url: string
    type?: string
}

const props = withDefaults(defineProps<Props>(), {
    type: 'video/mp4'
})

const videoRef = ref<HTMLVideoElement | null>(null)
let player: Plyr | null = null
let hls: Hls | null = null

const initPlayer = () => {
    if (!videoRef.value || !props.url) return

    player = new Plyr(videoRef.value, {
        controls: [
            'play-large',
            'play',
            'progress',
            'current-time',
            'mute',
            'volume',
            'captions',
            'settings',
            'pip',
            'airplay',
            'fullscreen',
        ],
        speed: { selected: 1, options: [0.5, 0.75, 1, 1.25, 1.5, 1.75, 2] },
        tooltips: { controls: true, seek: true },
    })

    if (props.url) {
        if (props.type === 'application/x-mpegURL' || props.type === 'application/vnd.apple.mpegurl') {
            if (Hls.isSupported()) {
                hls = new Hls()
                hls.loadSource(props.url)
                hls.attachMedia(videoRef.value!)
                hls.on(Hls.Events.MANIFEST_PARSED, () => {
                    player?.play()
                })
            } else if (videoRef.value.canPlayType('application/vnd.apple.mpegurl')) {
                videoRef.value.src = props.url
                player.play()
            }
        }
    }
}

const destroyPlayer = () => {
    if (hls) {
        hls.destroy()
        hls = null
    }
    if (player) {
        player.destroy()
        player = null
    }
}

const reloadSource = () => {
    destroyPlayer()
    initPlayer()
}

watch(() => props.url, () => {
    if (player) {
        reloadSource()
    }
})

onMounted(() => {
    initPlayer()
})

onUnmounted(() => {
    destroyPlayer()
})

defineExpose({
    player,
    reloadSource
})
</script>

<style scoped>
.video-player-wrapper {
    width: 100%;
    border-radius: 12px;
    overflow: hidden;
}

.video-player-wrapper :deep(.plyr--video) {
    background: #000;
}
</style>