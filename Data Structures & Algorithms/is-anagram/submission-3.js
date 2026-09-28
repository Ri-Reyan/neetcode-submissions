class Solution {
  /**
   * @param {string} s
   * @param {string} t
   * @return {boolean}
   */
  isAnagram(s, t) {
  const mapS = new Map();
  const mapT = new Map();

  if (s.length !== t.length) {
    return false;
  }
  for (const ch of s) {
    if (mapS.has(ch)) {
      mapS.set(ch, mapS.get(ch) + 1);
    } else {
      mapS.set(ch, 1);
    }
  }

  for (const ch of t) {
    if (mapT.has(ch)) {
      mapT.set(ch, mapT.get(ch) + 1);
    } else {
      mapT.set(ch, 1);
    }
  }

  for (let i = 0; i < s.length; i++) {
    if (mapS.get(s[i]) !== mapT.get(s[i])) {
      return false;
    }
  }

  return true;
}
}