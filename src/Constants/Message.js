const INPUT = Object.freeze({
  name: '코치의 이름을 입력해 주세요. (, 로 구분)\n',
  menu: '(이)가 못 먹는 메뉴를 입력해 주세요.\n',
});

const OUTPUT = Object.freeze({
  announce: '점심 메뉴 추천을 시작합니다.\n',
  resultAnnounce: '메뉴 추천 결과입니다.\n',
  end: '추천을 완료했습니다.',
});

const PREFIX_ERROR = '[ERROR]';

const ERROR = Object.freeze({
  inputBlank: `${PREFIX_ERROR} 입력이 빈칸입니다.`,
  minimumName: `${PREFIX_ERROR} 코치는 최소 2명 이상 입력해야 합니다.`,
  missMenu: `${PREFIX_ERROR} 없는 메뉴입니다.`,
});

module.exports = { INPUT, OUTPUT, ERROR };
