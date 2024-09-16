# Node.js 이벤트 루프 동작 방식

1. Timer: setTimeout과 setInterval의 콜백을 처리합니다.
2. I/O Callback: 대부분의 콜백을 처리합니다.
3. Idle(유휴, 준비): 내부적으로 사용됩니다.
4. Poll: 새로운 I/O 이벤트를 검색합니다.
5. Check: setImmediate()의 콜백을 처리합니다.
6. Close Callback: 연결 종료 콜백 등을 처리합니다.

nextTickQueue는 이벤트 루프의 일부는 아니지만, process.nextTick()의 콜백을 보관합니다.
이벤트 루프는 이러한 단계를 반복적으로 순회하며, 각 단계에서 해당하는 콜백들을 실행합니다.

# setImmediate(), setTimeout(fn,0), process.nextTick()의 차이

1. setImmediate(): 매 반복마다 체크 단계에서 실행됩니다.
2. setTimeout(fn,0): 타이머 단계에서 실행되며, 최소 지연 시간이 있습니다.
3. process.nextTick(): 현재 작업이 완료된 직후, 다음 단계로 넘어가기 전에 실행됩니다.
