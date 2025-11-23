/**
 * Fungsi untuk mencari formula perhitungan yang mencapai target
 * @param {number[]} numbers - Array angka yang akan digunakan
 * @param {number} target - Target angka yang ingin dicapai
 * @returns {string|null} - Formula yang ditemukan atau null jika tidak ada
 */
function findFormula(numbers, target) {
  if (!numbers || numbers.length === 0) {
    throw new Error("Array angka tidak boleh kosong");
  }

  const operators = ['+', '-', '*'];
  
  // Generate semua permutasi angka
  function permute(arr) {
    if (arr.length <= 1) return [arr];
    const result = [];
    for (let i = 0; i < arr.length; i++) {
      const current = arr[i];
      const remaining = arr.slice(0, i).concat(arr.slice(i + 1));
      const perms = permute(remaining);
      for (const perm of perms) {
        result.push([current].concat(perm));
      }
    }
    return result;
  }

  // Generate semua kombinasi operator
  function generateOperatorCombinations(length) {
    if (length === 0) return [[]];
    const result = [];
    const smaller = generateOperatorCombinations(length - 1);
    for (const ops of smaller) {
      for (const op of operators) {
        result.push([...ops, op]);
      }
    }
    return result;
  }

  // Generate semua kombinasi penempatan kurung
  function generateParentheses(nums, ops) {
    const expressions = [];
    
    // Tanpa kurung
    expressions.push(buildExpression(nums, ops, []));
    
    // Dengan berbagai kombinasi kurung
    const n = nums.length;
    for (let i = 0; i < n - 1; i++) {
      for (let j = i + 1; j < n; j++) {
        expressions.push(buildExpression(nums, ops, [[i, j]]));
      }
    }
    
    // Kurung nested dan multiple
    if (n >= 3) {
      for (let i = 0; i < n - 2; i++) {
        for (let j = i + 1; j < n - 1; j++) {
          for (let k = j + 1; k < n; k++) {
            expressions.push(buildExpression(nums, ops, [[i, j], [j, k]]));
            expressions.push(buildExpression(nums, ops, [[i, k]]));
          }
        }
      }
    }
    
    return expressions;
  }

  // Build expression dengan kurung
  function buildExpression(nums, ops, parentheses) {
    let expr = '';
    const usedInParens = new Set();
    
    // Tandai elemen yang ada dalam kurung
    for (const [start, end] of parentheses) {
      for (let i = start; i <= end; i++) {
        usedInParens.add(i);
      }
    }
    
    // Build expression
    for (let i = 0; i < nums.length; i++) {
      let openParens = '';
      let closeParens = '';
      
      // Cek apakah index ini mulai kurung
      for (const [start, end] of parentheses) {
        if (i === start) openParens += '(';
        if (i === end) closeParens += ')';
      }
      
      expr += openParens + nums[i];
      
      if (i < ops.length) {
        expr += closeParens + ' ' + ops[i] + ' ';
      } else {
        expr += closeParens;
      }
    }
    
    return expr;
  }

  // Evaluasi expression
  function evaluateExpression(expr) {
    try {
      // Gunakan Function constructor untuk evaluate (lebih aman dari eval)
      return Function('"use strict"; return (' + expr.replace(/\s/g, '') + ')')();
    } catch (e) {
      return null;
    }
  }

  // Coba semua permutasi dan kombinasi
  const permutations = permute(numbers);
  const operatorCombinations = generateOperatorCombinations(numbers.length - 1);

  for (const perm of permutations) {
    for (const ops of operatorCombinations) {
      const expressions = generateParentheses(perm, ops);
      
      for (const expr of expressions) {
        const result = evaluateExpression(expr);
        if (result === target) {
          return expr;
        }
      }
    }
  }

  return null;
}

// Export untuk digunakan di file lain
module.exports = findFormula;